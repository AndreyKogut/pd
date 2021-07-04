import { HeroVisitor } from './hero.visitor';


export interface AbilityModel {
	accept(heroVisitor: HeroVisitor): void;
}
