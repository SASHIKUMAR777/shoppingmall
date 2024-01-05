module.exports = {
    // ... other webpack configuration options
    module: {
      rules: [
        {
          test: /\.json$/,
          type: 'javascript/auto',
        },
      ],
    },
  };
  