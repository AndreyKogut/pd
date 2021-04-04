import { Entity } from './entity';


export class Builder {
	private entity: Entity;

	constructor() {
		this.createEmpty();
	}

	initData(value: number): Builder {
		const entity = this.getInstance();
		entity.prop1 = value > 3 ? 'Grater' : 'Less';

		return this;
	}

	generateId(): Builder {
		const entity = this.getInstance();
		entity.prop2 = Math.random();

		return this;
	}

	getInstance(): Entity {
		return this.entity;
	}

	private createEmpty(): void {
		this.entity = new Entity();
	}
}
