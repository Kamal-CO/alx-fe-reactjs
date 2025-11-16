import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="back-button">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <Link to="/" className="back-button">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <Link to={`/edit/${recipe.id}`} className="edit-button">
            Edit Recipe
          </Link>
          <DeleteRecipeButton recipeId={recipe.id} recipeTitle={recipe.title} />
        </div>
      </div>
      
      <div className="recipe-content">
        <section className="recipe-section">
          <h3>Description</h3>
          <p>{recipe.description}</p>
        </section>
        
        <section className="recipe-section">
          <h3>Ingredients</h3>
          <div className="ingredients-list">
            {recipe.ingredients && recipe.ingredients.split(',').map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                • {ingredient.trim()}
              </div>
            ))}
          </div>
        </section>
        
        <section className="recipe-section">
          <h3>Instructions</h3>
          <div className="instructions">
            {recipe.instructions && recipe.instructions.split('.').filter(step => step.trim()).map((step, index) => (
              <div key={index} className="instruction-step">
                <strong>Step {index + 1}:</strong> {step.trim()}.
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetails;