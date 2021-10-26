function log(text) {
	console.log(text);
}

System.register([], function (_export, _context) {
  var dep;
  return {
    setters: [function (_dep) {
      dep = _dep;
    }],
    execute: function () {
      _export({ log });
    }
  };
});