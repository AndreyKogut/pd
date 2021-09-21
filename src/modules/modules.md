# Modules

*Module it's a file with own scope that contains some functionality and is able to export it as well as import something from other modules.*

## Before
Pre es6 moduling could be acheaved by using [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and Module or Revealing module patterns.

* Module pattern
	```
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
	})()
	```
* Revealing module pattern. Like Module pattern but we do not create separate functions and just return function refs.
	```
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
	})()
	```

We can access these variables via global scope, but variables and functions declared inside those modules are not visible outside and do not make any name collisions.
```
<body>
	<script src="./module-pattern.js"></script>
	<script src="./revealing-module-pattern.js"></script>
	<script>
		console.log(modulePattern.getCounter()); // 0
		console.log(revealingModulePattern.getCounter()); // 0	
	</script>
</body>
```

We should take into account that if we have a few scripts next to one another, a browser loads a first one then runs it, and then go to another one until all scripts are loaded and then render the rest of the page. So we need to keep all scripts at the very bottom of the page and also we need to keep the right order because if we use a variable from a script below the current one we will get a Reference error because it's not loaded yet.

To prevent blocking rendering when a script is processing we can use async/defer attributes.

#### Async:

* Do not block rendering.
* Scripts fire right after they are loaded.
```
// Using
<script async src="./module-pattern.js"></script>
<script async src="./revealing-module-pattern.js"></script>
```

#### Defer:

* Do not block rendering.
* All scripts with *defer* are processed in the same order as they are on the page.
* Tells the browser that script is meant to be executed after the document has been parsed, but before firing [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event).
```
// Using
<script defer src="./module-pattern.js"></script> // Fires first
<script defer src="./revealing-module-pattern.js"></script> // Fires second
<script async src="**ANY**"></script> // Fires right after loaded
```


## Now
ES Modules was introduced in 2015 in ES6 and is also known for [import/export syntax](https://javascript.info/import-export).

Expample:

log.js
```
export const log = (text) => {
	console.log(text);
}
```
greet.js
```
import { log } from './log.js';

export const greet = () => {
	log('Hello');
}

greet();
```

index.html
```
<body>
	<script type="module" src="./greet.js"></script>
	<script type="module" src="./log.js"></script>
</body>

// => Hello
```

### ES Modules vs regular scripts (*[Loading priorities](https://addyosmani.com/blog/script-priorities/)*)

* ES Modules have own scope(not global).
* No **this**.
	(In regular browser's script **this** = window*, but in ES Modules it's **undefined**)
* Use import/export syntax to access ather modules.
* Always "use strict".
* Code of the module runs when a first time imported.
* **import.meta** contains information about current module.

	// Body
	```
	<script type="module">console.log(import.meta)</script>
	```

	```
	=> {url: 'http://127.0.0.1:5500/src/modules/es-modules/index.html'}
	```
* Acts like **defer** by default.
* Module with src loads only once.
* Loading scripts from other domains require CORS configuration on the requested domain.
* Use **nomodule** attribute to run some script in older browsers.