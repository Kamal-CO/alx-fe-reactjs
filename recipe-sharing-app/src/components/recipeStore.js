import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: "1 cup flour, 2 tbsp sugar, 1 tbsp baking powder, 1 cup milk, 1 egg, 2 tbsp butter",
      instructions: "Mix dry ingredients. Add wet ingredients. Cook on griddle until golden brown.",
      prepTime: 15,
      cookTime: 10,
      difficulty: "Easy",
      category: "Breakfast"
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable stir fry",
      ingredients: "Mixed vegetables, soy sauce, garlic, ginger, olive oil",
      instructions: "Heat oil, sauté garlic and ginger. Add vegetables and stir fry. Add soy sauce.",
      prepTime: 20,
      cookTime: 15,
      difficulty: "Medium",
      category: "Lunch"
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies",
      ingredients: "flour, chocolate chips, butter, sugar, eggs, vanilla extract",
      instructions: "Cream butter and sugar. Add eggs and vanilla. Mix in flour and chocolate chips. Bake at 350°F for 10-12 minutes.",
      prepTime: 25,
      cookTime: 12,
      difficulty: "Easy",
      category: "Dessert"
    }
  ],
  
  // Search and Filter States
  searchTerm: '',
  selectedCategory: '',
  selectedDifficulty: '',
  maxPrepTime: '',
  filteredRecipes: [],
  
  // Recipe Actions
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
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and Filter Actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
  
  setMaxPrepTime: (time) => set({ maxPrepTime: time }),
  
  // Filter Recipes Action
  filterRecipes: () => {
    const state = get();
    const { recipes, searchTerm, selectedCategory, selectedDifficulty, maxPrepTime } = state;
    
    let filtered = recipes;
    
    // Search by title, description, or ingredients
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }
    
    // Filter by difficulty
    if (selectedDifficulty) {
      filtered = filtered.filter(recipe => recipe.difficulty === selectedDifficulty);
    }
    
    // Filter by preparation time
    if (maxPrepTime) {
      filtered = filtered.filter(recipe => recipe.prepTime <= parseInt(maxPrepTime));
    }
    
    set({ filteredRecipes: filtered });
  },
  
  // Clear all filters
  clearFilters: () => set({
    searchTerm: '',
    selectedCategory: '',
    selectedDifficulty: '',
    maxPrepTime: '',
    filteredRecipes: get().recipes
  }),
  
  // Get available categories and difficulties for filters
  getCategories: () => {
    const recipes = get().recipes;
    return [...new Set(recipes.map(recipe => recipe.category))].filter(Boolean);
  },
  
  getDifficulties: () => {
    const recipes = get().recipes;
    return [...new Set(recipes.map(recipe => recipe.difficulty))].filter(Boolean);
  }
}));

export default useRecipeStore;