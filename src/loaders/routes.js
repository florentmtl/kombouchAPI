import BouteilleModule from '../components/bouteille/bouteille.module.js';
import JarreModule from '../components/jarre/jarre.module.js';

export default (app) => {
  app.use('/jarres', JarreModule.router);
  app.use('/bouteilles', BouteilleModule.router);
};
