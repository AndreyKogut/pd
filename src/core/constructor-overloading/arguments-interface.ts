interface Arguments {
	a: number;
	set1: { a: number, b: number },
	set2: { a: number, b: string },
}

export class ConstructorOverloading {
	a: number;
	b: number;

	sum: number;

	constructor(args: Partial<Arguments>) {
		if ('a' in args) {
			this.a = args.a;
			this.b = args.a;

			return;
		}

		if ('set1' in args) {
			Object.assign(this, args.set1);

			return;
		}

		if ('set2' in args) {
			this.a = args.set2.a;
			this.b = +args.set2.b;
		}
	}
}
