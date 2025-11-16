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
<<<<<<< HEAD
    },
    {
      id: 4,
      title: "Greek Salad",
      description: "Fresh and healthy Mediterranean salad",
      ingredients: "cucumber, tomatoes, red onion, feta cheese, olives, olive oil, oregano",
      instructions: "Chop vegetables, combine with feta and olives. Dress with olive oil and oregano.",
      prepTime: 15,
      cookTime: 0,
      difficulty: "Easy",
      category: "Lunch"
    },
    {
      id: 5,
      title: "Beef Stroganoff",
      description: "Creamy Russian beef dish with mushrooms",
      ingredients: "beef strips, mushrooms, onion, sour cream, beef broth, egg noodles",
      instructions: "Sauté beef, mushrooms, and onions. Add broth and simmer. Stir in sour cream and serve over noodles.",
      prepTime: 30,
      cookTime: 25,
      difficulty: "Medium",
      category: "Dinner"
=======
>>>>>>> 434854ed03a0e6d007520287b83ed795d77ccdf3
    }
  ],
  
  // Search and Filter States
  searchTerm: '',
  selectedCategory: '',
  selectedDifficulty: '',
  maxPrepTime: '',
  filteredRecipes: [],
  
<<<<<<< HEAD
  // Favorites and Recommendations
  favorites: [],
  recommendations: [],
  
=======
>>>>>>> 434854ed03a0e6d007520287b83ed795d77ccdf3
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
  
<<<<<<< HEAD
  // Favorites Actions
  addFavorite: (recipeId) => 
    set((state) => ({ 
      favorites: [...state.favorites, recipeId] 
    })),
  
  removeFavorite: (recipeId) => 
    set((state) => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),
  
  toggleFavorite: (recipeId) => 
    set((state) => {
      const isFavorite = state.favorites.includes(recipeId);
      if (isFavorite) {
        return { favorites: state.favorites.filter(id => id !== recipeId) };
      } else {
        return { favorites: [...state.favorites, recipeId] };
      }
    }),
  
  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId);
  },
  
  // Recommendations Actions
  generateRecommendations: () => {
    const state = get();
    const { recipes, favorites } = state;
    
    if (favorites.length === 0) {
      // If no favorites, recommend popular recipes (based on category frequency)
      const categoryCount = {};
      recipes.forEach(recipe => {
        categoryCount[recipe.category] = (categoryCount[recipe.category] || 0) + 1;
      });
      
      const popularRecipes = recipes
        .filter(recipe => recipe.category in categoryCount)
        .sort((a, b) => categoryCount[b.category] - categoryCount[a.category])
        .slice(0, 3);
      
      set({ recommendations: popularRecipes });
      return;
    }
    
    // Get favorite recipe categories and difficulties
    const favoriteCategories = new Set();
    const favoriteDifficulties = new Set();
    
    favorites.forEach(favId => {
      const recipe = recipes.find(r => r.id === favId);
      if (recipe) {
        favoriteCategories.add(recipe.category);
        favoriteDifficulties.add(recipe.difficulty);
      }
    });
    
    // Generate recommendations based on similar categories and difficulties
    const recommended = recipes
      .filter(recipe => 
        !favorites.includes(recipe.id) && // Don't recommend already favorited recipes
        (favoriteCategories.has(recipe.category) || favoriteDifficulties.has(recipe.difficulty))
      )
      .sort(() => Math.random() - 0.5) // Shuffle for variety
      .slice(0, 3); // Limit to 3 recommendations
    
    set({ recommendations: recommended });
  },
  
=======
>>>>>>> 434854ed03a0e6d007520287b83ed795d77ccdf3
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