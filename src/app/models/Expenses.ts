import {StatutsExpenses} from './StatusExpenses';
import {PaymentMethod} from './PaymentMethod';
import {Properties} from './Properties';

export class Expense {
  constructor(
    public id?: number,
    public amount?: number,
    public description?: string,
    public status?: StatutsExpenses,
    public paymentMethod?: PaymentMethod,
    public createdBy?: string,
    public creationDate?: Date,
    public modificationDate?: Date,
    public properties?: Properties
  ) {}
}
