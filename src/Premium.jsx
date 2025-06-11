
import React, { useEffect, useState } from 'react';
import autoRecipeGenerator from './autoRecipeGenerator';

const Premium = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    setRecipe(autoRecipeGenerator());
  }, []);

  return (
    <div>
      <h2>Zona Premium</h2>
      {recipe && (
        <div>
          <h3>{recipe.title}</h3>
          <ul>{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
          <p>{recipe.steps.join('. ')}</p>
        </div>
      )}
    </div>
  );
};

export default Premium;
