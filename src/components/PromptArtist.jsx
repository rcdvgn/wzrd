import { useState } from 'react'
import getArtists from '../api/getArtists';

export default function PromptArtist({ searchResults, setSearchResults, accessToken, refreshAccessToken }) {
    const [query, setQuery] = useState('');



    async function handleQuery(e){
        setQuery(e.target.value);
        if (e.target.value){
            const currentSearchResults = await getArtists({accessToken, refreshAccessToken, query: e.target.value,});
            if (currentSearchResults) {
                setSearchResults(currentSearchResults.artists.items);
            }
        }
    }

    return (
        <>
            <div className="promptTitle">Artista</div>
            <div className="promptSubtitle">Quem voce tem mais escutado nos ultimos tempos?</div>
            <div className="promptInteraction promptArtist">
                <div className="selectedArtistsContainer">
                    <div className="selectedArtist">Drake</div>
                    <div className="selectedArtist">Mariah Carey</div>
                </div>
                <div className="artistsSearchContainer">
                    <input 
                        placeholder="Lucas Borges"
                        spellCheck={false}
                        type="text"
                        className="artistsSearch" 
                        value={query}
                        onChange={handleQuery}
                    />
                </div>
                <div className="searchResultsContainer">
                    <div className="searchResults">
                        {searchResults.map((item, index) => {
                            return (
                                <div className="searchResult" key={index}>
                                    <div className="searchResultImgContainer">
                                        <img src={item.images[2]} alt="" className="searchResultImg" />
                                        
                                    </div>
                                    <div className="searchResultArtist">{item.name}</div>
                                    <div className="searchResultAdd"></div>
                                </div>
                            )
                        })}
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}