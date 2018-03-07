module.exports = {
    plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    }
}
};

module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}

module.exports = {
	plugins: [
		require('postcss-cssnext')
	]
};

module.exports = {
	plugins: {
		"postcss-cssnext": {
			browsers: [
				"Chrome >= 60",
				"Safari >= 10.1",
				"iOS >= 10.3",
				"Firefox >= 54",
				"Edge >= 15"
			],
			compress: true
		}
	}
};