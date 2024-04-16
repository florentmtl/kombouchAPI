import Bouteille from './bouteille.entities.js';

class BouteilleController {
  constructor(bouteilleService) {
    this.bouteilleService = bouteilleService;
  }

  createBouteille = (req, res) => {
    const bouteille = new Bouteille(this.bouteilleService.getNewID(), req.body.ingredients);
    return res.status(201).send(this.bouteilleService.addBouteille(bouteille));
  };

  getBouteilles = (_, res) => {
    return res.status(200).send(this.bouteilleService.getBouteilles());
  };

  getBouteille = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.bouteilleService.getBouteille(id));
  };

  delBouteille = (req, res) => {
    const { id } = req.body;
    return res.status(200).send(this.bouteilleService.delBouteille(id));
  };
}

export default BouteilleController;
