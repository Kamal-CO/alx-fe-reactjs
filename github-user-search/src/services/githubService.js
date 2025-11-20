import axios from 'axios';

// Function to fetch single user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function for advanced user search
export const searchUsers = async (searchParams) => {
  try {
    let query = '';
    
    // Build the search query based on provided parameters
    if (searchParams.username) {
      query += `${searchParams.username} `;
    }
    if (searchParams.location) {
      query += `location:${searchParams.location} `;
    }
    if (searchParams.minRepos) {
      query += `repos:>${searchParams.minRepos} `;
    }
    if (searchParams.language) {
      query += `language:${searchParams.language} `;
    }
    
    // Remove trailing space and encode the query
    query = query.trim();
    
    if (!query) {
      throw new Error('At least one search parameter is required');
    }
    
    const page = searchParams.page || 1;
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=30`
    );
    
    // For each user, get their full profile to get additional details
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
          return userDetails.data;
        } catch (error) {
          return user; // Return basic user info if detailed fetch fails
        }
      })
    );
    
    return {
      ...response.data,
      items: usersWithDetails
    };
  } catch (error) {
    throw error;
  }
};