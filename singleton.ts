class Singleton {
  private static instance: Singleton | null = null;

  public constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton;
