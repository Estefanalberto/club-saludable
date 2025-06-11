
export default function autoRecipeGenerator() {
  const recetas = [
    {
      title: "Ensalada detox de espinaca",
      ingredients: ["Espinaca", "Pepino", "Aguacate"],
      steps: ["Lava los ingredientes", "Córtalos en trozos", "Mézclalos y sirve"]
    },
    {
      title: "Wrap integral con hummus",
      ingredients: ["Tortilla integral", "Hummus", "Zanahoria", "Espinaca"],
      steps: ["Unta el hummus", "Agrega los vegetales", "Enrolla y disfruta"]
    }
  ];
  return recetas[Math.floor(Math.random() * recetas.length)];
}
