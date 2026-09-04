import {Owner} from './Owner';
import {RoomType} from './RoomType';
import {Expense} from './Expenses';
import {Chanels} from './Chanels';
import {Room} from './Rooms';

export class Properties{
   id: string;
   name: string;
   propertyCode: string;
   smoobuCode: string;
  relatedName: string
   owners:Owner;
   type:RoomType;
   expenses:Expense[];
   chanels:Chanels;
   roomS:Room[];
}
