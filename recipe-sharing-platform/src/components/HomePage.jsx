import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import recipeData from '../data.json';

// In HomePage.jsx, update the useEffect:
useEffect(() => {
  const loadRecipes = async () => {
    try {
      // Fetch from public folder
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Failed to load recipes');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError(err.message);
      console.error('Error loading recipes:', err);
    } finally {
      setLoading(false);
    }
  };

  loadRecipes();
}, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-xl">Error: {error}</p>
          <p className="mt-2">Please check your data file and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🍳 Recipe Sharing Platform</h1>
          <p className="text-xl mb-8 opacity-90">
            Discover, share, and create delicious recipes from around the world
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Search recipes..."
              className="px-6 py-3 rounded-full text-gray-800 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{recipes.length}</div>
              <div className="text-gray-600">Total Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1.2k</div>
              <div className="text-gray-600">Active Cooks</div>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Recipes</h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Cooking Time</option>
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No recipes yet</h3>
            <p className="text-gray-600 mb-6">Be the first to share your favorite recipe!</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              + Add First Recipe
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to share your own recipe?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of food lovers and share your culinary creations with the world!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            🍲 Share Your Recipe
          </button>
        </div>
      </div>
    </div>
  );

export default HomePage;