module.exports = {
    apps: [
        {
            name: 'esg.honest-family.com',
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            port: 3018, // yoru app port
            instances: 'max',
            exec_mode: 'cluster',
            cwd: './'
        }
    ]
};
