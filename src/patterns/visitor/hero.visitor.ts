import { Eat } from './eat';
import { Sleep } from './sleep';
import { Train } from './train';


export abstract class HeroVisitor {
	constructor(
		public heals: number = 100,
	) {}

	abstract eat(data: Eat): void;

	abstract sleep(data: Sleep): void;

	abstract train(train: Train): void;
}
