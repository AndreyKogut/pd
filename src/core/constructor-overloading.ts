interface DataModel {
	a: number;
	b: string;
	c: string;
}

export class ConstructorOverloading {
	a: number;
	b: string;

	constructor(a: number);
	constructor(a: number, b?: string) {
		if (typeof b === 'string') {

		}
	}
}