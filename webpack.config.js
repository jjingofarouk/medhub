const path = require('path');

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
  },
  // Other configurations...
};