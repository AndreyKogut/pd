import { Weapon, WeaponDecorator } from './weapon';


export class SuppressorDecorator extends WeaponDecorator {
	constructor(
		weapon: Weapon,
	) {
		super(weapon);
	}

	getDestription(): string {
		return `${this.weapon.getDestription()}, has suppressor`;
	}

	getUtilitiPoints(): number {
		return this.weapon.getUtilitiPoints() + 5;
	}
}
