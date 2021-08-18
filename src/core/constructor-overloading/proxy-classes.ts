export interface ConstructorOverloadingModel {
	a: number;
	b: number;
}

export class ConstructorOverloading implements ConstructorOverloadingModel {
	constructor(public a: number, public b: number) {}
}

export class OneArgCO implements ConstructorOverloadingModel {
	a: number;
	b: number;

	constructor(a: number) {
		this.a = a;
		this.b = a;
	}
}

export class CustomArgsCO implements ConstructorOverloadingModel {
	a: number;
	b: number;

	constructor(a: number, b: string) {
		this.a = a;
		this.b = +b;
	}
}
