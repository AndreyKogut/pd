export class ConstructorOverloading {
	static fromOneArg(a: number): ConstructorOverloading {
		return new ConstructorOverloading(a, a);
	}

	static fromCustomArgs(a: number, b: string): ConstructorOverloading {
		return new ConstructorOverloading(a, +b);
	}

	constructor(public a: number, public b: number) {}
}
