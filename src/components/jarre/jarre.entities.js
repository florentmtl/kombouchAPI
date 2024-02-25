class Jarre {
    constructor(id, theVert, theNoir, sucre) {
        this.id = id;
        this.theVert = theVert;
        this.theNoir = theNoir;
        this.sucre = sucre;
    }

    toJSON() {
        return {
            id: this.id,
            theVert: this.theVert,
            theNoir: this.theNoir,
            sucre: this.sucre,
        };
    }
}

export default Jarre;