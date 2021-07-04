import { AbilityModel } from './ability.model';
import { HeroVisitor } from './hero.visitor';


export class Sleep implements AbilityModel {
	constructor(
		public time: number,
	) {}

	accept(heroVisitor: HeroVisitor): void {
		heroVisitor.sleep(this);
	}
}
