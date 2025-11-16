import { useEffect } from 'react';
import useRecipeStore from '../components/recipeStore';

const AdvancedFilters = () => {
  const {
    selectedCategory,
    selectedDifficulty,
    maxPrepTime,
    setSelectedCategory,
    setSelectedDifficulty,
    setMaxPrepTime,
    filterRecipes,
    clearFilters,
    getCategories,
    getDifficulties
  } = useRecipeStore();

  const categories = getCategories();
  const difficulties = getDifficulties();

  useEffect(() => {
    filterRecipes();
  }, [selectedCategory, selectedDifficulty, maxPrepTime, filterRecipes]);

  const hasActiveFilters = selectedCategory || selectedDifficulty || maxPrepTime;

  return (
    <div className="advanced-filters">
      <h3>Filter Recipes</h3>
      
      <div className="filter-group">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="difficulty-filter">Difficulty</label>
        <select
          id="difficulty-filter"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="filter-select"
        >
          <option value="">All Difficulties</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="prep-time-filter">Max Prep Time (minutes)</label>
        <select
          id="prep-time-filter"
          value={maxPrepTime}
          onChange={(e) => setMaxPrepTime(e.target.value)}
          className="filter-select"
        >
          <option value="">Any Time</option>
          <option value="15">15 minutes or less</option>
          <option value="30">30 minutes or less</option>
          <option value="45">45 minutes or less</option>
          <option value="60">60 minutes or less</option>
        </select>
      </div>

      {hasActiveFilters && (
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default AdvancedFilters;