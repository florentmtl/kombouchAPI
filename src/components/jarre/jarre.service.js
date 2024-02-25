class JarreService {
    constructor() {
        this.jarres = [];
    }

    addJarre = (jarre) => {
        this.jarres.push(jarre)
        return jarre
    }

    getJarres = () => this.jarres

    getJarre = (id) => {
        const jarre = this.jarres.find((item) => item.id === id)
        return jarre
    }
}

export default JarreService;