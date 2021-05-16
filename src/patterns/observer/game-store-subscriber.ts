import { DiscountNotification } from './discount-notification';


export abstract class GameStoreSubscriber {
	abstract notify(info: DiscountNotification): void;
}
