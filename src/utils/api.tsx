import axios from 'axios';

// API URL (Replace with your actual API)
const API_URL = 'https://your-api.com/validate-token';

// Function to check if the token is valid
export const validateToken = async (token: string) => {
  try {
    const response = await axios.post(
      API_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    // If token is valid, you can return the response
    return response.data;
  } catch (error) {
    // If token is invalid, return false or handle accordingly
    console.error('Token validation failed', error);
    return false;
  }
};
