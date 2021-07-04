import { Eat } from './eat';
import { HeroVisitor } from './hero.visitor';
import { Sleep } from './sleep';
import { Train } from './train';


export class FirstHeroVisitor extends HeroVisitor {
	eat(data: Eat): void {
		this.heals = this.heals + (data.amountIndex * 2);
	}

	sleep(data: Sleep): void {
		this.heals = this.heals + (data.time * .5);
	}

	train(train: Train): void {
		this.heals = this.heals - (train.time * .1);
	}
}
