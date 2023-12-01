import { useState, useEffect } from 'react'
import './App.css';
import Prompt from './components/Prompt.jsx';
import PromptMood from "./components/PromptMood";
import PromptArtist from "./components/PromptArtist"
import PromptVibe from "./components/PromptVibe"
import PromptPopularity from "./components/PromptPopularity"
import PromptDuration from "./components/PromptDuration"
import getToken from "./api/getToken.jsx"
import Results from "./components/Results"


function App() {
  const [parameters, setParameters] = useState({
    mood: 1,
    vibes: [
      {"valence": 0.9,
        "tempo": 90,
        "mode": 1,
        "energy": 0.7,
        "danceability": 0.6,
        "acousticness": 0.2}
    ],
    artists: ["7HO5fOXE4gh3lzZn64tX2E", "4iHNK0tOyZPYnBU7nGAgpQ", "6XpaIBNiVzIetEPCWDvAFP"],
    duration: 180000,
    p: 0,
    popularity: 50,
    
  });

  const [progress, setProgress] = useState(0);
  const progressChecks = [];
  const [accessToken, setAccessToken] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  


  const prompts = [
    <PromptMood parameters={parameters} setParameters={setParameters} />, 
    <PromptArtist searchResults={searchResults} setSearchResults={setSearchResults} accessToken={accessToken} refreshAccessToken={refreshAccessToken} />, 
    <PromptVibe parameters={parameters} setParameters={setParameters} />, 
    <PromptPopularity parameters={parameters} setParameters={setParameters} />, 
    <PromptDuration parameters={parameters} setParameters={setParameters} />,
    <Results parameters={parameters} setParameters={setParameters} accessToken={accessToken} />
  ];


  async function refreshAccessToken(){
    let at = await getToken();

    if (at) {
      setAccessToken(at);
      localStorage.setItem('accessToken', at);

      return 200;
    }
    else{
      alert("deu tudo errado");

      return 401;
    }
  }
  
  useEffect(() => {
    let at = localStorage.getItem('accessToken');

    if (at) {
      //console.log('access token from local storage:', at);
      setAccessToken(at);
    } else {
      console.log('access token not found in local storage, trying to get a new one');
      refreshAccessToken();
    }
  }, [])

  return (
    <div className="container">
      <Prompt 
        progress={progress}
        setProgress={setProgress}
        prompts={prompts}
      />
    </div>
  )
}

export default App
