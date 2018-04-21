const fs = require('fs');
const path = require('path');
const nodeEval = require('node-eval');
const config = require('./config');

const bemConfig = require('@bem/sdk.config')();
const sets = Object.keys(bemConfig.getSync().sets)
    .filter(platform => fs.existsSync(platform + '.bundles'));

const bundleName = 'index';
const isDev = process.env.NODE_ENV === 'development';
const useCache = !isDev;
const cacheTTL = config.cacheTTL;
let templates = sets.reduce((acc, platform) => {
    acc[platform] = getTemplatesForPlatform(platform);

    return acc;
}, {});
let cache = Object.create(null);

function render(req, res, data, context) {
    const query = req.query;
    const user = req.user;
    const cacheKey = req.originalUrl + (context ? JSON.stringify(context) : '') + (user ? JSON.stringify(user) : '');
    const cached = cache[cacheKey];

    if (useCache && cached && (new Date() - cached.timestamp < cacheTTL)) {
        return res.send(cached.html);
    }

    if (isDev && query.json) return res.send('<pre>' + JSON.stringify(data, null, 4) + '</pre>');

    const bemtreeCtx = {
        block: 'root',
        context: context,
        // extend with data needed for all routes
        data: Object.assign({}, {
            url: req._parsedUrl,
            csrf: req.csrfToken()
        }, data)
    };

    const platform = req.useragent.isMobile ? 'touch' : 'desktop';
    if (isDev) templates[platform] = getTemplatesForPlatform(platform);

    let bemjson;

    try {
        bemjson = templates[platform].BEMTREE.apply(bemtreeCtx);
    } catch(err) {
        console.error('BEMTREE error', err.stack);
        console.trace('server stack');
        return res.sendStatus(500);
    }

    if (isDev && query.bemjson) return res.send('<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>');

    let html;

    try {
        html = templates[platform].BEMHTML.apply(bemjson);
    } catch(err) {
        console.error('BEMHTML error', err.stack);
        return res.sendStatus(500);
    }

    useCache && (cache[cacheKey] = {
        timestamp: new Date(),
        html: html
    });

    res.send(html);
}

function dropCache() {
    cache = Object.create(null);
}

function evalFile(filename) {
    return nodeEval(fs.readFileSync(filename, 'utf8'), filename);
}

function getTemplatesForPlatform(platform) {
    const pathToBundle = path.resolve(__dirname, '..', platform + '.bundles', bundleName);

    return {
        BEMTREE: evalFile(path.join(pathToBundle, bundleName + '.bemtree.js')).BEMTREE,
        BEMHTML: evalFile(path.join(pathToBundle, bundleName + '.bemhtml.js')).BEMHTML
    };
}

module.exports = {
    render: render,
    dropCache: dropCache
};
