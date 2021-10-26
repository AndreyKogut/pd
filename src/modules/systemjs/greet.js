System.import('./log.js').then((module) => {
	module.log('Hello');

	System.import('./styles.css').then(module => console.log(module.default));
	System.import('./json.json').then(module => console.log(module.default));
});