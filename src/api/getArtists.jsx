import axios from 'axios';
import getToken from "./getToken"

export default async function getArtists({ accessToken, refreshAccessToken, query }){
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        params: {
          q: query,
          type: 'artist',
          market: 'BR',
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.status === 200) {
        // Successful response
        console.log('Valid get artists request', response.data);
        return response.data
      } else {
        // Handle non-200 status codes
        console.error('nao foi possivel resgatar artistas');

        refreshAccessToken();
      }
    } catch (error) {
      // Handle errors
      console.error('NAO foi possivel resgatar artistas:', error);
    }
};