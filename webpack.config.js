var webpack  = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'), // This is where images AND js will go
    publicPath: '', // This is used to generate URLs to e.g. images
    filename: 'react-selectable.js',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
		root: 'React',
		commonjs2: 'react',
		commonjs: 'react',
		amd: 'react',
    },
    'react-dom': {
		root: 'ReactDOM',
		commonjs2: 'react-dom',
		commonjs: 'react-dom',
		amd: 'react-dom'
  	}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
      modules: ["node_modules"],
  }
};
