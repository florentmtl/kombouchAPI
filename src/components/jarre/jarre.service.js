class JarreService {
  constructor() {
    this.jarres = [];
  }

  getNewID = () => {
    if (this.jarres.length > 0) {
      return this.jarres.at(-1).id + 1;
    } else {
      return 0;
    }
  };

  addJarre = (jarre) => {
    this.jarres.push(jarre);
    return jarre;
  };

  getJarres = (fetchNumber) => this.jarres.slice(0, fetchNumber);

  getJarre = (id) => {
    return this.jarres.find((item) => item.id === parseInt(id));
  };

  markAsFinished = (id) => {
    const idx = this.jarres.indexOf(this.getJarre(id));
    if (idx !== -1) {
      this.jarres.at(idx).finished = true;
    }
    return true;
  };

  delJarre = (id) => {
    const idx = this.jarres.indexOf(this.getJarre(id));
    return this.jarres.splice(idx, 1);
  };
}

export default JarreService;
