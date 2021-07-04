import { AbilityModel } from './ability.model';
import { HeroVisitor } from './hero.visitor';


export class Train implements AbilityModel {
	constructor(
		public time: number,
	) {}

	accept(heroVisitor: HeroVisitor): void {
		heroVisitor.train(this);
	}
}
