import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const selectedCategory = useRecipeStore(state => state.selectedCategory);
  const selectedDifficulty = useRecipeStore(state => state.selectedDifficulty);
  const maxPrepTime = useRecipeStore(state => state.maxPrepTime);

  // Use filtered recipes if any filters are active, otherwise use all recipes
  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  const hasActiveFilters = searchTerm || selectedCategory || selectedDifficulty || maxPrepTime;

  return (
    <div className="recipe-list">
      <div className="recipe-list-header">
        <h2>Recipes ({displayRecipes.length})</h2>
        {hasActiveFilters && (
          <div className="active-filters">
            <span>Filtered results</span>
          </div>
        )}
      </div>

      {displayRecipes.length === 0 ? (
        <div className="empty-state">
          <p>
            {hasActiveFilters 
              ? "No recipes match your search criteria. Try adjusting your filters."
              : "No recipes yet. Add your first recipe!"
            }
          </p>
        </div>
      ) : (
        <div className="recipes-grid">
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-category">{recipe.category}</span>
                  <span className="recipe-difficulty">{recipe.difficulty}</span>
                  <span className="recipe-time">{recipe.prepTime} min prep</span>
                </div>
              </Link>
              <div className="recipe-card-actions">
                <Link to={`/edit/${recipe.id}`} className="edit-link">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;