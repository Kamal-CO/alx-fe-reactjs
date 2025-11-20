import axios from 'axios';

// Create function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Make GET request to GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    // If there's an error, throw it to handle in the component
    throw error;
  }
};