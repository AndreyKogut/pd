export class ConstructorOverloading {
	a: number;
	b: number;

	sum: number;

	constructor(a: number);
	constructor(a: number, b: number);
	constructor(a: number, b: string);
	constructor(a: number, b?: string | number) {
		if (b === undefined) {
			this.a = a;
			this.b = a;

			return;
		}

		if (typeof b === 'string') {
			this.a = a;
			this.b = a + +this.b;
		}
	}
}
