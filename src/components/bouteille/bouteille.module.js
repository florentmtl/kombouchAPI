import BouteilleService from './bouteille.service.js';
import BouteilleController from './bouteille.controller.js';
import BouteilleRouter from './bouteille.router.js';

const bouteilleService = new BouteilleService();
const bouteilleController = new BouteilleController(bouteilleService);
const bouteilleRouter = new BouteilleRouter(bouteilleController);

export default {
  service: bouteilleService,
  controller: bouteilleController,
  router: bouteilleRouter.getRouter(),
};
