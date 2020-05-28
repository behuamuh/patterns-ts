class Prototype {
  public constructor(public params: any) { }

  public clone() {
    return new Prototype(this.params);
  }
}

export default Prototype;
