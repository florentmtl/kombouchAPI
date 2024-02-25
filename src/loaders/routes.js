import JarreModule from "../components/jarre/jarre.module.js";

export default (app) => {
    app.use('/jarres', JarreModule.router);
}