import { Link } from 'react-router-dom';
import useRecipeStore from '..//components/recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id)).filter(Boolean)
  );

  if (favorites.length === 0) {
    return (
      <div className="favorites-list">
        <h2>My Favorites</h2>
        <div className="empty-favorites">
          <p>No favorite recipes yet!</p>
          <p>Click the heart icon on any recipe to add it to your favorites.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <div className="favorites-header">
        <h2>My Favorites ({favorites.length})</h2>
      </div>
      
      <div className="favorites-grid">
        {favorites.map(recipe => (
          <div key={recipe.id} className="favorite-card">
            <div className="favorite-card-header">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
            <p className="favorite-description">{recipe.description}</p>
            <div className="favorite-meta">
              <span className="favorite-category">{recipe.category}</span>
              <span className="favorite-difficulty">{recipe.difficulty}</span>
              <span className="favorite-time">{recipe.prepTime} min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;