module.exports = {
  plugins: [
    require('autoprefixer')({broswer: 'last 5 versions'}),
    require('postcss-pxtorem'),
  ]
};