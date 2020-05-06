const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['./src/index'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/',
    },
};
