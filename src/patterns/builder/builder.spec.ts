import { Builder } from './builder';
import { Entity } from './entity';


describe('Builder', () => {
	let builder: Builder;

	beforeEach(() => {
		builder = new Builder();
	});

	test('Sould create builder', () => {
		const builder = new Builder();
		const instance = builder.getInstance();

		expect(instance).toBeInstanceOf(Entity);
	});

	test('Sould update prop1', () => {
		const builderPropInitial = builder.getInstance().prop1;

		builder.initData(3);

		const builderUpdatedValue = builder.getInstance().prop1;

		expect(builderPropInitial).not.toBe(builderUpdatedValue);
	});

	test('Sould update prop2', () => {
		const builderPropInitial = builder.getInstance().prop2;

		builder.generateId();

		const builderUpdatedValue = builder.getInstance().prop2;

		expect(builderPropInitial).not.toBe(builderUpdatedValue);
	});
});
