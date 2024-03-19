module.exports = {
    apps: [
        {
            name: 'app.e-box.kr',
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            port: 3018, // yoru app port
            instances: 'max',
            exec_mode: 'cluster',
            cwd: './'
        }
    ]
};
