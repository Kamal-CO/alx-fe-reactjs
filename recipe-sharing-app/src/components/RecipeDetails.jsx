import { useParams, Link, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="back-button">Back to Recipes</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <div className="recipe-details">
      <Link to="/" className="back-button">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <Link to={`/edit-recipe/${recipe.id}`} className="edit-button">
            Edit Recipe
          </Link>
          <button onClick={handleDelete} className="delete-button">
            Delete Recipe
          </button>
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
            {recipe.ingredients.split(',').map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                • {ingredient.trim()}
              </div>
            ))}
          </div>
        </section>
        
        <section className="recipe-section">
          <h3>Instructions</h3>
          <div className="instructions">
            {recipe.instructions.split('.').filter(step => step.trim()).map((step, index) => (
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