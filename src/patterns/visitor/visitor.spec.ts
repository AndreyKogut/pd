import { Eat } from './eat';
import { FirstHeroVisitor } from './first-hero.visitor';
import { SecondHeroVisitor } from './second-hero.visitor';
import { Sleep } from './sleep';
import { Train } from './train';


describe('Visitor', () => {
	const baseHeals = 100;
	let firstHeroVisitor: FirstHeroVisitor;
	let secondHeroVisitor: SecondHeroVisitor;
	
	let eat: Eat;
	let sleep: Sleep;	
	let train: Train;

	beforeEach(() => {
		firstHeroVisitor = new FirstHeroVisitor(baseHeals);
		secondHeroVisitor = new SecondHeroVisitor(baseHeals);
		eat = new Eat(10);
		sleep = new Sleep(10);
		train = new Train(10);
	});

	test('Should create visitors and abilities', () => {
		expect(firstHeroVisitor).toBeInstanceOf(FirstHeroVisitor);
		expect(secondHeroVisitor).toBeInstanceOf(SecondHeroVisitor);

		expect(eat).toBeInstanceOf(Eat);
		expect(sleep).toBeInstanceOf(Sleep);
		expect(train).toBeInstanceOf(Train);
	});

	test('Eat ability accepts any visitor', () => {
		eat.accept(firstHeroVisitor);
		eat.accept(secondHeroVisitor);

		expect(firstHeroVisitor.heals).toBe(120);
		expect(secondHeroVisitor.heals).toBe(130);
	});

	test('Sleep ability accepts any visitor', () => {
		sleep.accept(firstHeroVisitor);
		sleep.accept(secondHeroVisitor);

		expect(firstHeroVisitor.heals).toBe(105);
		expect(secondHeroVisitor.heals).toBe(107);
	});

	test('Train ability accepts any visitor', () => {
		train.accept(firstHeroVisitor);
		train.accept(secondHeroVisitor);

		expect(firstHeroVisitor.heals).toBe(99);
		expect(secondHeroVisitor.heals).toBe(97);
	});
});
