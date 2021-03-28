export class Singletone {
	private static currentValue: Singletone;

	private constructor() {}

	static createInstance() {
		if (this.currentValue != null) {
			return this.currentValue;
		}

		this.currentValue = new Singletone();

		return this.currentValue;
	}
}
