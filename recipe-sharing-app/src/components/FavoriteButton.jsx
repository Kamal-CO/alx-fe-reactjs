import useRecipeStore from '../components/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const isFavorite = useRecipeStore(state => state.isFavorite(recipeId));
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);

  const handleToggleFavorite = () => {
    toggleFavorite(recipeId);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;