import JarreService from "./jarre.service.js";
import JarreController from "./jarre.controller.js";
import JarreRouter from "./jarre.router.js";

const jarreService = new JarreService();
const jarreController = new JarreController(jarreService)
const jarreRouter = new JarreRouter(jarreController)

export default {
    service: jarreService,
    controller: jarreController,
    router: jarreRouter.getRouter()
}