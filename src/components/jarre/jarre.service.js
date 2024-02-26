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
    return this.jarres.find((item) => item.id === id);
  };
}

export default JarreService;
