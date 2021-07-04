import { AbilityModel } from './ability.model';
import { HeroVisitor } from './hero.visitor';


export class Eat implements AbilityModel {
	constructor(
		public amountIndex: number,
	) {}

	accept(heroVisitor: HeroVisitor): void {
		heroVisitor.eat(this);
	}
}
