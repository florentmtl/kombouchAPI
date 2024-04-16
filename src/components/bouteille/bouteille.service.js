class BouteilleService {
  constructor() {
    this.bouteilles = [];
  }

  getNewID = () => {
    if (this.bouteilles.length > 0) {
      return this.bouteilles.at(-1).id + 1;
    } else {
      return 0;
    }
  };

  addBouteille = (bouteille) => {
    this.bouteilles.push(bouteille);
    return bouteille;
  };

  getBouteilles = () => this.bouteilles;

  getBouteille = (id) => {
    return this.bouteilles.find((item) => item.id === parseInt(id));
  };

  delBouteille = (id) => {
    const idx = this.bouteilles.indexOf(this.getBouteille(id));
    return this.bouteilles.splice(idx, 1);
  };
}

export default BouteilleService;
