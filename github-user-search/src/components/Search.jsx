import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  // State for basic search
  const [username, setUsername] = useState('');
  // State for advanced filters
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [language, setLanguage] = useState('');
  // State for results - ensure this is always an array
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchType, setSearchType] = useState('basic'); // 'basic' or 'advanced'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    
    if (searchType === 'basic' && username.trim()) {
      await performBasicSearch();
    } else if (searchType === 'advanced') {
      await performAdvancedSearch(1);
    }
  };

  const performBasicSearch = async () => {
    setLoading(true);
    setError(null);
    setUsers([]); // Reset to empty array
    
    try {
      // Use fetchUserData for basic search
      const data = await fetchUserData(username);
      // Convert single user to array for consistent mapping
      setUsers([data]);
      setHasMore(false);
    } catch (err) {
      setError('Looks like we cant find the user');
      setUsers([]); // Ensure users is empty array on error
    } finally {
      setLoading(false);
    }
  };

  const performAdvancedSearch = async (pageNum) => {
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
      
      // Use searchUsers for advanced search
      const data = await searchUsers(searchParams);
      // data.items should be an array, but ensure it is
      const userArray = Array.isArray(data.items) ? data.items : [];
      
      if (pageNum === 1) {
        setUsers(userArray);
      } else {
        setUsers(prev => [...prev, ...userArray]);
      }
      setHasMore(userArray.length === 30);
    } catch (err) {
      setError('Failed to search users. Please try again.');
      setUsers([]); // Ensure users is empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    performAdvancedSearch(nextPage);
  };

  const clearFilters = () => {
    setUsername('');
    setLocation('');
    setMinRepos('');
    setLanguage('');
    setUsers([]);
    setError(null);
    setSearchType('basic');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            GitHub User Search
          </h1>
          <p className="text-lg text-gray-600">
            Discover developers from around the world
          </p>
        </div>

        {/* Search Type Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setSearchType('basic')}
              className={`px-4 py-2 rounded-md transition-all ${
                searchType === 'basic'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🔍 Basic Search
            </button>
            <button
              onClick={() => setSearchType('advanced')}
              className={`px-4 py-2 rounded-md transition-all ${
                searchType === 'advanced'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              ⚡ Advanced Search
            </button>
          </div>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {searchType === 'basic' ? 'Basic Search' : 'Advanced Search'}
            </h2>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear All
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Basic Search Field - Always Visible */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                👤 GitHub Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username to search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required={searchType === 'basic'}
              />
            </div>

            {/* Advanced Filters - Conditionally Rendered */}
            {searchType === 'advanced' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🔍 Advanced Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      📍 Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., San Francisco"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      📊 Min Repositories
                    </label>
                    <input
                      type="number"
                      value={minRepos}
                      onChange={(e) => setMinRepos(e.target.value)}
                      placeholder="e.g., 10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      💻 Programming Language
                    </label>
                    <input
                      type="text"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      placeholder="e.g., JavaScript"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Search Button */}
            <button
              type="submit"
              disabled={loading || (searchType === 'basic' && !username.trim())}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                `🚀 ${searchType === 'basic' ? 'Search User' : 'Search Developers'}`
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6 shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Display Results - Now properly handles array mapping */}
        {users.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Search Results <span className="text-blue-600">({users.length} user{users.length !== 1 ? 's' : ''})</span>
              </h3>
              {searchType === 'advanced' && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Page {page}
                </span>
              )}
            </div>
            
            {/* Grid layout for multiple users or single user */}
            <div className={`grid gap-6 ${
              users.length === 1 
                ? 'grid-cols-1 max-w-2xl mx-auto' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {users.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            
            {/* Load More Button - Only for advanced search */}
            {searchType === 'advanced' && hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-8 rounded-xl hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-lg"
                >
                  {loading ? 'Loading...' : '📥 Load More Users'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && !error && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200 max-w-md mx-auto">
              <div className="text-6xl mb-4">
                {searchType === 'basic' ? '👤' : '👨‍💻'}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {searchType === 'basic' ? 'Search for a User' : 'Start Searching'}
              </h3>
              <p className="text-gray-600">
                {searchType === 'basic' 
                  ? 'Enter a GitHub username to get started' 
                  : 'Use the filters above to find GitHub developers'
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// User Card Component
function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden group">
      <div className="p-6">
        {/* Header with Avatar and Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`}
            className="w-16 h-16 rounded-2xl border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 text-lg truncate">{user.login}</h4>
            {user.name && (
              <p className="text-gray-700 font-medium truncate">{user.name}</p>
            )}
            <div className="flex items-center mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                👥 {user.followers || 0} followers
              </span>
            </div>
          </div>
        </div>

        {/* User Bio */}
        {user.bio && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {user.bio}
          </p>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{user.public_repos || 0}</div>
            <div className="text-xs text-gray-600">Repositories</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{user.following || 0}</div>
            <div className="text-xs text-gray-600">Following</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-2 text-sm text-gray-600">
          {user.location && (
            <div className="flex items-center">
              <span className="w-5">📍</span>
              <span className="truncate">{user.location}</span>
            </div>
          )}
          {user.company && (
            <div className="flex items-center">
              <span className="w-5">🏢</span>
              <span className="truncate">{user.company}</span>
            </div>
          )}
        </div>

        {/* Profile Link */}
        <a 
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-4 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-semibold text-sm shadow-md"
        >
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
}

export default Search;