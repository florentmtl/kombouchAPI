import express from 'express';

class JarreRouter {
  constructor(jarreController) {
    this.jarreController = jarreController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.jarreController.getJarre);
    router.route('/finished/:id').put(this.jarreController.markAsFinished);
    router.route('/del').post(this.jarreController.delJarre);
    router.route('/').get(this.jarreController.getJarres);
    router.route('/').post(this.jarreController.createJarre);
    return router;
  }
}

export default JarreRouter;
