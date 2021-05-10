import { OpticDecorator } from './optic-decorator';
import { Pistol } from './pistol';
import { SuppressorDecorator } from './suppressor-decorator';


describe('Decorator', () => {
	test('Sould create pistol', () => {
		const glock = new Pistol('Glock', 10);

		expect(glock).toBeInstanceOf(Pistol);
		expect(glock.getDestription()).toEqual('Glock');
		expect(glock.getUtilitiPoints()).toEqual(10);
	});

	test('Should create pistol with suppressor', () => {
		const glock = new Pistol('Glock', 10);
		const glockWithSuppressor = new SuppressorDecorator(glock);

		expect(glockWithSuppressor.getDestription()).toEqual('Glock, has suppressor');
		expect(glockWithSuppressor.getUtilitiPoints()).toEqual(15);
	});

	test('Should create pistol with suppressor and optics', () => {
		const glock = new Pistol('Glock', 10);
		const glockWithSuppressor = new SuppressorDecorator(glock);
		const glockWithOptics = new OpticDecorator(glockWithSuppressor);

		expect(glockWithOptics.getDestription()).toEqual('Glock, has suppressor, has optic');
		expect(glockWithOptics.getUtilitiPoints()).toEqual(22);
	});
});
