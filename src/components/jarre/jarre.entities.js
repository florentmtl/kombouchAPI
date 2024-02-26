class Jarre {
  constructor(id, theVert, theNoir, sucre, date = Date.now()) {
    this.id = id;
    this.theVert = theVert;
    this.theNoir = theNoir;
    this.sucre = sucre;
    this.date = date;
  }

  toJSON() {
    return {
      id: this.id,
      theVert: this.theVert,
      theNoir: this.theNoir,
      sucre: this.sucre,
      date: this.date,
    };
  }
}

export default Jarre;
