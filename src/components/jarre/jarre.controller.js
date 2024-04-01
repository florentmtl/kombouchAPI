import Jarre from './jarre.entities.js';

class JarreController {
  constructor(jarreService) {
    this.jarreService = jarreService;
  }

  createJarre = (req, res) => {
    const jarre = new Jarre(
      req.body.id,
      req.body.theVert,
      req.body.theNoir,
      req.body.sucre,
      req.body.date,
      req.body.finished,
    );
    return res.status(201).send(this.jarreService.addJarre(jarre));
  };

  getJarres = (_, res) => {
    return res.status(200).send(this.jarreService.getJarres());
  };

  getJarre = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.jarreService.getJarre(id));
  };

  /*updateJarre = (req, res) => {
    const { id } = req.params;
    const jarre = new Jarre(id, req.body.theVert, req.body.theNoir, req.body.sucre, req.body.date, req.body.finished);
    return res.status(201).send(this.jarreService.updateJarre(jarre));
  };*/

  markAsFinished = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.jarreService.markAsFinished(id));
  };

  delJarre = (req, res) => {
    const { id } = req.body;
    return res.status(200).send(this.jarreService.delJarre(id));
  };
}

export default JarreController;
