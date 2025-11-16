import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: "1 cup flour, 2 tbsp sugar, 1 tbsp baking powder, 1 cup milk, 1 egg, 2 tbsp butter",
      instructions: "Mix dry ingredients. Add wet ingredients. Cook on griddle until golden brown."
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable stir fry",
      ingredients: "Mixed vegetables, soy sauce, garlic, ginger, olive oil",
      instructions: "Heat oil, sauté garlic and ginger. Add vegetables and stir fry. Add soy sauce."
    }
  ],
  
  addRecipe: (newRecipe) => 
    set((state) => ({ 
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
    })),
  
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    })),
  
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),
  
  getRecipe: (id) => {
    return useRecipeStore.getState().recipes.find(recipe => recipe.id === id);
  }
}));

export default useRecipeStore;