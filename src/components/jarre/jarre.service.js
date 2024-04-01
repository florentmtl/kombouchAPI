class JarreService {
  constructor() {
    this.jarres = [];
  }

  addJarre = (jarre) => {
    this.jarres.push(jarre);
    return jarre;
  };

  getJarres = () => this.jarres;

  getJarre = (id) => {
    return this.jarres.find((item) => item.id === parseInt(id));
  };

  /*updateJarre = (jarre) => {
    const idx = this.jarres.indexOf(this.getJarre(jarre.id));
    return this.jarres.splice(idx, 1).push(jarre);
  };*/

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
