var revealingModulePattern = (function() {
	var counter = 0;

	function inc() {
		counter++;
	}

	function dec() {
		counter--;
	}

	return {
		inc,
		dec,
		getCounter() {
			return counter;
		}
	}
})();