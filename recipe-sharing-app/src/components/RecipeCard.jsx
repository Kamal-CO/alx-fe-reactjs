import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <Link to={`/recipe/${recipe.id}`} className="recipe-link">
          <h3>{recipe.title}</h3>
        </Link>
        <FavoriteButton recipeId={recipe.id} />
      </div>
      <p className="recipe-description">{recipe.description}</p>
      <div className="recipe-meta">
        <span className="recipe-category">{recipe.category}</span>
        <span className="recipe-difficulty">{recipe.difficulty}</span>
        <span className="recipe-time">{recipe.prepTime} min prep</span>
      </div>
      <div className="recipe-card-actions">
        <Link to={`/edit/${recipe.id}`} className="edit-link">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;