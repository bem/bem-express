# bem-express

Almost the same as [project-stub](https://github.com/bem/project-stub/) but with [BEMTREE](https://en.bem.info/technology/bemtree/) and [Express](http://expressjs.com/).

## Installation

```sh
npm i
enb make
```

## Development

```sh
npm run watch
nodemon
```

## Production

```sh
YENV=production enb make
node server
```

## Templating

Templating starts in `root` block which replaces itself with `page` or any other context (if specified as argument to `render` function).

## Pro tips

Run server in dev mode with `NODE_ENV=development` environment variable (`nodemon` will set it for you).

In dev mode

* Add `?json=1` to URL to see raw data
* Add `?bemjson=1` to URL to see BEMJSON generated with BEMTREE templates.
