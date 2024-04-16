class Bouteille {
  constructor(id, ingredients) {
    this.id = id;
    this.ingredients = ingredients;
  }

  toJSON() {
    return {
      id: this.id,
      ingredients: this.ingredients,
    };
  }
}

export default Bouteille;
