export class Booking {
  referenceId!: string;
  type!: string;
  arrival!: string;
  departure!: string;
  modifiedAt: string | null = null;
  channelReference: string | null = null;

  guestName!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  phone!: string;

  // Display fields
  apartmentName!: string;
  channelName!: string;
  relatedName!: string;

  adults!: number;
  children!: number;
  checkIn!: string;
  checkOut!: string;

  notice!: string;
  assistantNotice!: string;

  price!: number;
  priceDetails!: string;
  cityTax: string | null = null;
  pricePaid!: string;

  commissionIncluded!: number;
  prepayment: number | null = null;
  prepaymentPaid!: string;

  deposit: string | null = null;
  depositPaid!: string;

  language!: string;
  guestAppUrl!: string;

  blockedBooking!: boolean;

  guestId!: number;

  constructor(init?: Partial<Booking>) {
    Object.assign(this, init);
  }
}
