import { DiscountNotification } from './discount-notification';
import { DiscountSubscriber } from './discount-subscriber';
import { GameStore } from './game-store';


describe('Observer', () => {
	test('Sould create game store and discount subscription', () => {
		const gameStore = new GameStore();
		const discountSubscriber = new DiscountSubscriber(() => {});

		expect(gameStore).toBeInstanceOf(GameStore);
		expect(discountSubscriber).toBeInstanceOf(DiscountSubscriber);
	});

	test('Sould be possible to subscribe to message', () => {
		const gameStore = new GameStore();
		const discountSubscriberFirst = new DiscountSubscriber(() => {});
		const discountSubscriberSecond = new DiscountSubscriber(() => {});

		expect(gameStore.getDiscountSubscribersCount()).toEqual(0);

		gameStore.discountSubscribe(discountSubscriberFirst);
		gameStore.discountSubscribe(discountSubscriberSecond);
		expect(gameStore.getDiscountSubscribersCount()).toEqual(2);
	});

	test('Sould be possible to unsubscribe from message', () => {
		const gameStore = new GameStore();
		const discountSubscriber = new DiscountSubscriber(() => {});

		expect(gameStore.getDiscountSubscribersCount()).toEqual(0);

		gameStore.discountSubscribe(discountSubscriber);
		expect(gameStore.getDiscountSubscribersCount()).toEqual(1);

		gameStore.discountUnsubscribe(discountSubscriber);
		expect(gameStore.getDiscountSubscribersCount()).toEqual(0);
	});

	test('Only active subscribers are notified', () => {
		const gameStore = new GameStore();

		let firstSubscriberEvent: DiscountNotification;
		const discountSubscriberFirst = new DiscountSubscriber((event) => {
			firstSubscriberEvent = event;
		});

		let secondSubscriberEvent: DiscountNotification;
		const discountSubscriberSecond = new DiscountSubscriber((event) => {
			secondSubscriberEvent = event;
		});

		gameStore.discountSubscribe(discountSubscriberFirst);
		gameStore.discountSubscribe(discountSubscriberSecond);

		expect(gameStore.getDiscountSubscribersCount()).toEqual(2);

		gameStore.discountUnsubscribe(discountSubscriberSecond);

		const gameName = 'Any game: first';
		const gameDiscount = .2;

		gameStore.discountNotify(gameName, gameDiscount);

		expect(secondSubscriberEvent).toBeUndefined();
		expect(firstSubscriberEvent).not.toBeUndefined();
		expect(firstSubscriberEvent.game).toEqual(gameName);
		expect(firstSubscriberEvent.discount).toEqual(gameDiscount);
	});
});
