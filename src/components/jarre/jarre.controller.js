import Jarre from "./jarre.entities.js";

class JarreController {
    constructor(jarreService) {
        this.jarreService = jarreService;
    }

    createJarre = (req, res) => {
        const jarre = new Jarre(req.body.id, req.body.theVert, req.body.theNoir, req.body.sucre);
        return res.status(201).send(this.jarreService.addJarre(jarre));
    }

    getJarres = (_, res) => {
        return res.status(200).send(this.jarreService.getJarres());
    }

    getJarre = (req, res) => {
        const {id} = req.params;
        return res.status(200).send(this.jarreService.getJarre(id));
    }
}

export default JarreController;