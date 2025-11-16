import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: ''
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    updateRecipe(recipeId, formData);
    navigate(`/recipe/${recipeId}`);
  };

  if (!recipe) {
    return (
      <div className="edit-recipe-form">
        <h2>Recipe Not Found</h2>
        <Link to="/">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="edit-recipe-form">
      <Link to={`/recipe/${recipeId}`} className="back-button">← Back to Recipe</Link>
      
      <h2>Edit Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows="3"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
            placeholder="1 cup flour, 2 tbsp sugar, ..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="form-textarea"
            rows="6"
            placeholder="Step by step instructions..."
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <Link to={`/recipe/${recipeId}`} className="cancel-button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;