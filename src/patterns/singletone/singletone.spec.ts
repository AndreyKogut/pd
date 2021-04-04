import { Singletone } from './singletone';


describe('Singletone', () => {
	test('Should create an object', () => {
		const singletone = Singletone.getInstance();

		expect(singletone).toBeInstanceOf(Singletone);
	});

	test('Should have only one instance', () => {
		const singletone = Singletone.getInstance();

		const newSingletoneInstance = Singletone.getInstance();

		expect(singletone).toBe(newSingletoneInstance);
	});
});
