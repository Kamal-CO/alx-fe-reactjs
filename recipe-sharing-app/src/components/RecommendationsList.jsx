import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>Recommended For You</h2>
        <div className="empty-recommendations">
          <p>Add some recipes to your favorites to get personalized recommendations!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <div className="recommendations-header">
        <h2>Recommended For You</h2>
        <button 
          onClick={generateRecommendations}
          className="refresh-recommendations"
          aria-label="Refresh recommendations"
        >
          🔄
        </button>
      </div>
      
      <div className="recommendations-grid">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recommendation-card">
            <div className="recommendation-card-header">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
            <p className="recommendation-description">{recipe.description}</p>
            <div className="recommendation-meta">
              <span className="recommendation-category">{recipe.category}</span>
              <span className="recommendation-difficulty">{recipe.difficulty}</span>
              <span className="recommendation-time">{recipe.prepTime} min</span>
            </div>
            <div className="recommendation-reason">
              {favorites.length > 0 ? 'Similar to your favorites' : 'Popular choice'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;