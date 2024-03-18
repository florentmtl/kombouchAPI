class JarreService {
  constructor() {
    this.jarres = [];
  }

  addJarre = (jarre) => {
    this.jarres.push(jarre);
    console.log(jarre);
    return jarre;
  };

  getJarres = () => this.jarres;

  getJarre = (id) => {
    return this.jarres.find((item) => item.id === id);
  };

  delJarre = (id) => {
    const idx = this.jarres.indexOf(this.getJarre(id));
    return this.jarres.splice(idx, 1);
  };
}

export default JarreService;
