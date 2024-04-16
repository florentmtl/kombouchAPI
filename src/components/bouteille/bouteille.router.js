import express from 'express';

class BouteilleRouter {
  constructor(bouteilleController) {
    this.bouteilleController = bouteilleController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.bouteilleController.getBouteille);
    router.route('/del').post(this.bouteilleController.delBouteille);
    router.route('/').get(this.bouteilleController.getBouteilles);
    router.route('/').post(this.bouteilleController.createBouteille);
    return router;
  }
}

export default BouteilleRouter;
