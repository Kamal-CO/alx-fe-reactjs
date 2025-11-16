import useRecipeStore from '../components/recipeStore';
import RecipeCard from './RecipeCard';

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
        <h2>All Recipes ({displayRecipes.length})</h2>
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
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;