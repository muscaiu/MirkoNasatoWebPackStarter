var webpack = require('webpack')

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [//any files that end in .ts should be loaded with the ts-loader
            {
                test:/\.ts$/, 
                loader: 'ts'
            } 
        ]
    },
    resolve:{
        extensions:['','.js', '.ts']
    }
}
