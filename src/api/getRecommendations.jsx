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
              seed_artists: parameters.artists,
              target_acousticness: parameters.vibes.acousticness,
              target_danceability: parameters.vibes.danceability,
              target_duration_ms: parameters.duration,
              target_energy: parameters.vibes.energy,
              target_mode: parameters.mode,
              target_popularity: parameters.vibes.popularity,
              target_tempo: parameters.tempo,
              target_valence: parameters.vibes.valence,
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
