import { DiscountNotification } from './discount-notification';
import { GameStoreSubscriber } from './game-store-subscriber';


export class DiscountSubscriber extends GameStoreSubscriber {
	constructor(
		private readonly listener: (notification: DiscountNotification) => void = () => {},
	) {
		super();
	}

	notify(notification: DiscountNotification) {
		this.listener(notification);
	}
}
