import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            🍳 Recipe Sharing Platform
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tailwind CSS is working! Start building your recipe app.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Browse Recipes
            </button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
              Add Recipe
            </button>
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2">Setup Complete! ✅</h2>
            <p className="text-gray-700">
              Your React + Tailwind CSS project is ready. Next, you'll build the recipe platform components.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App