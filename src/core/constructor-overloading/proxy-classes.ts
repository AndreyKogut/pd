export class ConstructorOverloading {
	constructor(public a: number, public b: number) {}
}

export class OneArgCO implements ConstructorOverloading {
	a: number;
	b: number;

	constructor(a: number) {
		this.a = a;
		this.b = a;
	}
}

export class CustomArgsCO implements ConstructorOverloading {
	a: number;
	b: number;

	constructor(a: number, b: string) {
		this.a = a;
		this.b = +b;
	}
}
