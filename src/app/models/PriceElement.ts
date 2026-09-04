export class PriceElement {
  constructor(
    public type?: string,
    public name?: string,
    public amount?: number,
    public quantity?: number,
    public tax?: number,
    public currencyCode?: string,
    public sortOrder?: number
  ) {}
}
