import Jarre from './jarre.entities.js';

class JarreController {
  constructor(jarreService) {
    this.jarreService = jarreService;
  }

  createJarre = (req, res) => {
    const jarre = new Jarre(
      this.jarreService.getNewID(),
      req.body.theVert,
      req.body.theNoir,
      req.body.sucre,
      req.body.date,
      req.body.finished,
    );
    return res.status(201).send(this.jarreService.addJarre(jarre));
  };

  getJarres = (req, res) => {
    return req.params.fetchNumber
      ? res.status(200).send(this.jarreService.getJarres(req.params.fetchNumber))
      : res.status(200).send(this.jarreService.getJarres(100));
  };

  getJarre = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.jarreService.getJarre(id));
  };

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
