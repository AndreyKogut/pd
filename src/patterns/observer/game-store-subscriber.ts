import { DiscountNotification } from './discount-notification';


export abstract class GameStoreSubscriber {
	abstract handle(info: DiscountNotification): void;
}
