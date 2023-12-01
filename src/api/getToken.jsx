import axios from 'axios';

export default async function getToken(){
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials&client_id=6a4e29e917204a53a312c70c286ef23f&client_secret=1dffaeae7c4f47b39603f9878b5c86a8',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (response.status === 200) {
      // Successful response
      console.log("sucesso", response.data.access_token)
      return response.data.access_token;
    } else {
      // Handle non-200 status codes
      console.error('Error fetching access token', response.status);
    }
  } catch (error) {
    // Handle errors
    console.error('Error fetching access token:', error);
  }
};
