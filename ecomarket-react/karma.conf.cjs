// Activa babel-plugin-istanbul (bloque "env.test" de .babelrc) para medir cobertura.
process.env.BABEL_ENV = 'test';

const specs = 'src/**/*.spec.jsx';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [{ pattern: specs, watched: false }],
    preprocessors: { [specs]: ['webpack'] },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }],
      },
      resolve: { extensions: ['.js', '.jsx'] },
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },

    browsers: ['ChromeHeadless'],
    singleRun: true,
  });
};
