abstract class Weapon {
	constructor(
		private readonly usbilityPoints: number,	
		private readonly description: string,
	) {}

	getDestription(): string {
		return this.description;
	};

	getUtilitiPoints(): number {
		return this.usbilityPoints;
	};
}

abstract class WeaponDecorator extends Weapon {
	constructor(
		protected readonly weapon: Weapon,
	) {
		super(weapon.getUtilitiPoints(), weapon.getDestription());
	}

	abstract getDestription(): string;
	abstract getUtilitiPoints(): number;
}

export {
	WeaponDecorator,
	Weapon,
}
