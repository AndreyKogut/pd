var modulePattern = (function() {
	var counter = 0;

	function inc() {
		counter++;
	}

	function dec() {
		counter--;
	}

	return {
		incCounter() {
			inc();
		},
		decCounter() {
			dec();
		},
		getCounter() {
			return counter;
		}
	}
})();