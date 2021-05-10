import { Weapon } from './weapon';


export class Pistol extends Weapon {
	constructor(
		description: string,
		utilitiPoints: number,
	) {
		super(utilitiPoints, description);
	}
}
