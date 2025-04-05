const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "buffer": require.resolve("buffer/"),
          "util": require.resolve("util/"),
          "process": require.resolve("process/browser"),
          "stream": require.resolve("stream-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "url": require.resolve("url/"),
          "assert": require.resolve("assert/"),
          "events": require.resolve("events/"),
          "path": require.resolve("path-browserify"),
          "querystring": require.resolve("querystring-es3"),
          "zlib": require.resolve("browserify-zlib"),
          "fs": false,
          "net": false,
          "tls": false,
          "child_process": false,
          "http2": false
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
          'process.platform': JSON.stringify('browser'),
          'process.version': JSON.stringify(process.version),
          'process.stdout': JSON.stringify(null),
          'process.stderr': JSON.stringify(null),
          'process.stdin': JSON.stringify(null),
          'process.isTTY': JSON.stringify(false)
        }),
        new webpack.NormalModuleReplacementPlugin(
          /node:events/,
          'events'
        ),
        new webpack.NormalModuleReplacementPlugin(
          /node:process/,
          'process/browser'
        ),
        new webpack.NormalModuleReplacementPlugin(
          /node:util/,
          'util'
        )
      ]
    }
  }
}; 