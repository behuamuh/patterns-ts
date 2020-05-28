class Item {
  public constructor(
    public one: any,
    public two: any,
    public type: string,
  ) { }
}

class ItemFactory {
  public static create(type: string) {
    if (type === 'one') return new Item(100, 200, 'one');
    if (type === 'two') return new Item(200, 100, 'two');
  }
}

export default ItemFactory;
