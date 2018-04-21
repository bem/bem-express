module.exports = {
    root: true,

    levels: [
        {
            layer: 'common'
        },
        {
            layer: 'desktop'
        },
        {
            layer: 'touch'
        },
        {
            layer: 'development'
        }
    ].map(level => Object.assign({ scheme: 'nested', check: true }, level)),

    libs: {
        'bem-core': {},
        'bem-components': {},
    },

    sets: {
        desktop: '@bem-core design-desktop@bem-components common desktop',
        touch: '@bem-core design-touch@bem-components common touch'
    },

    modules: {
        'bem-tools': {
            plugins: {
                create: {
                    templates: {
                        'bemdecl.js': '.bem/templates/bemdecl.js',
                    },
                    techs: ['css', 'js'],
                    levels: {
                        'desktop.bundles': {
                            techs: ['bemdecl.js']
                        },
                        'touch.bundles': {
                            techs: ['bemdecl.js']
                        },
                        'common.blocks': {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
