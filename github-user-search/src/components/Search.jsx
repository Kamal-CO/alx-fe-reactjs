import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  // State to manage the search input value
  const [username, setUsername] = useState('');
  // State to store the user data from API
  const [userData, setUserData] = useState(null);
  // State to handle loading status
  const [loading, setLoading] = useState(false);
  // State to handle errors
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      searchUser(username);
    }
  };

  // Function to search for user using our service
  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            width="100" 
            style={{ borderRadius: '50%' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <p>Followers: {userData.followers} | Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;