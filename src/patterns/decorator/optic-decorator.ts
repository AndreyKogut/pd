import { Weapon, WeaponDecorator } from './weapon';


export class OpticDecorator extends WeaponDecorator {
	constructor(
		weapon: Weapon,
	) {
		super(weapon);
	}

	getDestription(): string {
		return `${this.weapon.getDestription()}, has optic`;
	}

	getUtilitiPoints(): number {
		return this.weapon.getUtilitiPoints() + 7;
	}
}
