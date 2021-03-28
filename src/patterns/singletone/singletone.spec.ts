import { Singletone } from './singletone';


describe('Singletone', () => {
	test('Should create object', () => {
		const singletone = Singletone.createInstance();

		expect(singletone).toBeInstanceOf(Singletone);
	});

	test('Should have only one instance', () => {
		const singletone = Singletone.createInstance();
		const newSingletoneInstance = Singletone.createInstance();

		expect(singletone).toBe(newSingletoneInstance);
	});
});
