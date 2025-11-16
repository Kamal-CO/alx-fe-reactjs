import { useState } from 'react';
import useRecipeStore from '../components/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    addRecipe({ 
      title: title.trim(), 
      description: description.trim(),
      ingredients: ingredients.trim(),
      instructions: instructions.trim(),
      prepTime: prepTime ? parseInt(prepTime) : 0,
      cookTime: cookTime ? parseInt(cookTime) : 0,
      difficulty: difficulty,
      category: category.trim()
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    setPrepTime('');
    setCookTime('');
    setDifficulty('Easy');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h2>Add New Recipe</h2>
      
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title *"
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (e.g., Breakfast, Lunch, Dinner)"
            className="form-input"
          />
        </div>
      </div>
      
      <div className="form-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description *"
          className="form-textarea"
          rows="3"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="form-select"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        
        <div className="form-group">
          <input
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            placeholder="Prep Time (minutes)"
            className="form-input"
            min="0"
          />
        </div>
        
        <div className="form-group">
          <input
            type="number"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            placeholder="Cook Time (minutes)"
            className="form-input"
            min="0"
          />
        </div>
      </div>

      <div className="form-group">
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma-separated)"
          className="form-textarea"
          rows="4"
        />
      </div>

      <div className="form-group">
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
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