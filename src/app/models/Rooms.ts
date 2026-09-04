import {RoomStatus} from './RoomStatus';
import {Bedtype} from './Bedtype';
import {RoomEquipment} from './RoomEquipment';
import {PriceElement} from './PriceElement';

export class Room {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public capacity?: number,
    public price?: number,
    public status?: RoomStatus,
    public surface?: number,
    public numberOfBeds?: number,
    public bedType?: Bedtype,
    public equipment?: RoomEquipment[],
    public photos?: string[],
    public creationDate?: Date,
    public modificationDate?: Date,
    public priceElements?: PriceElement[]
  ) {}

}
