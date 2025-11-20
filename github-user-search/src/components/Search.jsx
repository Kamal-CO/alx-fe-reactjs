import { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  // State for basic search
  const [username, setUsername] = useState('');
  // State for advanced filters
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [language, setLanguage] = useState('');
  // State for results and UI
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    await performSearch(1);
  };

  const performSearch = async (pageNum) => {
    setLoading(true);
    setError(null);
    
    try {
      const searchParams = {
        username: username || null,
        location: location || null,
        minRepos: minRepos || null,
        language: language || null,
        page: pageNum
      };
      
      const data = await searchUsers(searchParams);
      if (pageNum === 1) {
        setUsers(data.items);
      } else {
        setUsers(prev => [...prev, ...data.items]);
      }
      setHasMore(data.items.length === 30); // GitHub returns 30 items per page
    } catch (err) {
      setError('Failed to search users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    performSearch(nextPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">GitHub User Search</h2>
        
        {/* Basic Search */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username (optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., New York"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Repositories
            </label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g., 10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Programming Language
            </label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g., JavaScript"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {/* Results Section */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {users.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Search Results ({users.length} users)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// User Card Component
function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-3">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{user.login}</h4>
          {user.name && <p className="text-sm text-gray-600">{user.name}</p>}
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        {user.location && (
          <p>📍 {user.location}</p>
        )}
        {user.public_repos !== undefined && (
          <p>📚 Repos: {user.public_repos}</p>
        )}
        {user.followers !== undefined && (
          <p>👥 Followers: {user.followers}</p>
        )}
      </div>
      
      <a 
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-center bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600"
      >
        View Profile
      </a>
    </div>
  );
}

export default AdvancedSearch;