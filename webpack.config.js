module.exports = {
  entry: {
    filename: "./app/components/Timer.js"
  },
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|browser_components)/,
        loader: 'babel'
      }
    ]
  }
};
