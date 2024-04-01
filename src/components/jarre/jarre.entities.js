class Jarre {
  constructor(id, theVert, theNoir, sucre, date, finished) {
    this.id = id;
    this.theVert = theVert;
    this.theNoir = theNoir;
    this.sucre = sucre;
    this.date = date;
    this.finished = finished;
  }

  toJSON() {
    return {
      id: this.id,
      theVert: this.theVert,
      theNoir: this.theNoir,
      sucre: this.sucre,
      date: this.date,
      finished: this.finished,
    };
  }
}

export default Jarre;
