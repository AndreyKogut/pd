export class Singletone {
	private static currentValue: Singletone;

	private constructor() {}

	static getInstance(): Singletone {
		if (Singletone.currentValue) {
			return Singletone.currentValue;
		}

		Singletone.currentValue = new Singletone();

		return Singletone.currentValue;
	}
}
