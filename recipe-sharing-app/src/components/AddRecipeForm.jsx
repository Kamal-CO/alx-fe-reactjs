import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in title and description');
      return;
    }

    addRecipe(formData);
    
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h2>Add New Recipe</h2>
      
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Recipe Title *"
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Recipe Description *"
          className="form-textarea"
          rows="3"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Ingredients (comma-separated)"
          className="form-textarea"
          rows="4"
        />
      </div>

      <div className="form-group">
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Instructions"
          className="form-textarea"
          rows="6"
        />
      </div>
      
      <button type="submit" className="submit-button">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;