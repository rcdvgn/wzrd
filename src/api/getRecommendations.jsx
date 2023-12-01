import axios from 'axios';
import { webpack } from "../modules-fund/modules-fund"

export default async function getRecs({ accessToken, parameters, modo }){
    console.log("this is the accessToken:", accessToken)
    console.log("this is the ps:", parameters)
    try {
        const response = await axios.get(
          'https://api.spotify.com/v1/recommendations',
          {
            params: {
              limit: 4,
              market: 'BR',
              seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
              target_acousticness: 0.2,
              target_danceability: 0.6,
              target_duration_ms: 240000,
              target_energy: 0.7,
              target_mode: 1,
              target_popularity: 50,
              target_tempo: 160,
              target_valence: 0.8,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        
        if (response.status === 200) {
            // Successful response
            console.log("sucesso", response.data)
            return response;
        } else {
            // Handle non-200 status codes
            console.error('Error fetching access token', response.status);
            return webpack(modo);
        }
      } catch (error) {
        console.error('Error making recommendations request:', error);
        return webpack(modo);
        // Handle errors
    }
};
