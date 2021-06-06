import { GameStoreSubscriber } from './game-store-subscriber';


export class GameStore {
	private discontSubscribers: GameStoreSubscriber[] = [];

	discountSubscribe(subscriber: GameStoreSubscriber): void {
		this.discontSubscribers.push(subscriber);
	}

	discountUnsubscribe(subscriber: GameStoreSubscriber): void {
		this.discontSubscribers = this.discontSubscribers.filter((item) => item !== subscriber);
	}

	getDiscountSubscribersCount(): number {
		return this.discontSubscribers.length;
	}

	discountNotify(game: string, discount: number): void {
		this.discontSubscribers.forEach(item => item.handle({ game, discount }));
	}
}
