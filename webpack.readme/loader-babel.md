# babel-loader

    npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev

# examples

    {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-0']
        }
    }


    {
        test: /\.js$/,
        exclude: /node_modules/,  // 必须，否则报错：Uncaught ReferenceError: webpackJsonp is not defined
        // include: /resources/,
        // loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        loaders: [
            'react-hot',
            'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
    }