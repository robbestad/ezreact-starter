# EZ React starter

Starter app for EZReact

This repo is made to show how you can use EZ React in your own projects. 
All you need to do is add ezreact as a dependency and you'll have a setup
with hot reload that's fully ES 2015 ready.

The upside to using this repo is that you don't have to worry about
setting up your environment. It's all set up for you. All you
have to do is code your app.

It uses only one dependency - `ezreact`.

# Instructions

Clone this repo and run `npm install`. 

Then start the it by running `npm run dev` and open a browser
with `http://localhost:3000` 

## Setting up the developer webpack config

This is the basic webpack config for the starter:

```javascript
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'EZ React',
      template: 'index.ejs',
      inject: 'body'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
```

This config is compiled into our development server, which looks like this:

```javascript
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'assets', req.path));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
```

## Setting up a production server

Simply copy the webpack config and the server, remove HMR and add compression, and you're good to go.

## Modifying the template

EZ React uses index.ejs as a template for generating index.html. Please refer to (https://github.com/ampedandwired/html-webpack-plugin)[html-webpack-plugin] for instructions. In our webpack config we inject the title as shown above.


