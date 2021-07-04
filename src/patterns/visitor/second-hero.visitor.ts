import { Eat } from './eat';
import { HeroVisitor } from './hero.visitor';
import { Sleep } from './sleep';
import { Train } from './train';


export class SecondHeroVisitor extends HeroVisitor {
	eat(data: Eat): void {
		this.heals = this.heals + (data.amountIndex * 3);
	}

	sleep(data: Sleep): void {
		this.heals = this.heals + (data.time * .7);
	}

	train(train: Train): void {
		this.heals = this.heals - (train.time * .3);
	}
}
