import { useState } from 'react'

export default function PromptVibe({parameters, setParameters}) {

    const vibes = [
        {"valence": 0.3,
        "tempo": 100,
        "mode": 0,
        "energy": 0.8,
        "danceability": 0.5,
        "acousticness": 0.4},
        {"valence": 0.1,
        "tempo": 160,
        "mode": 0,
        "energy": 0.9,
        "danceability": 0.7,
        "acousticness": 0.1},
        {"valence": 0.6,
        "tempo": 140,
        "mode": 1,
        "energy": 0.8,
        "danceability": 0.8,
        "acousticness": 0.2},
        {"valence": 0.7,
        "tempo": 110,
        "mode": 1,
        "energy": 0.6,
        "danceability": 0.8,
        "acousticness": 0.3},
        {"valence": 0.9,
        "tempo": 90,
        "mode": 1,
        "energy": 0.7,
        "danceability": 0.6,
        "acousticness": 0.2},
        {"valence": 0.8,
        "tempo": 120,
        "mode": 1,
        "energy": 0.7,
        "danceability": 0.9,
        "acousticness": 0.2},
    ];

    const handleVibe = (n) => {
        const ph = parameters;
        ph.p = n;
        console.log("ffffff", ph);
        ph.vibes.push(vibes[n]);
        console.log("dddddd", ph.vibes);
        console.log(ph);
        setParameters(ph);
    }


    return (
        <>
            <div className="promptTitle">Emocional</div>
            <div className="promptSubtitle">Escolha 3 emocoes que melhor descrevem como voce esta se sentindo hoje</div>

            <div className="promptInteraction promptVibe">
                <div className="promptVibeRow">
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(0)}>
                        <div className="check-1-Option vibeCheckOption">Ansiedade</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(1)}>
                        <div className="check-1-Option vibeCheckOption">Raiva</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                </div>
                <div className="promptVibeRow">
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(2)}>
                        <div className="check-1-Option vibeCheckOption">Surpresa</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(3)}>
                        <div className="check-1-Option vibeCheckOption">Contentamento</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                </div>
                <div className="promptVibeRow">
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(4)}>
                        <div className="check-1-Option vibeCheckOption">Amor</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                    <div className="vibeCheckContainer check-1" onClick={() => handleVibe(5)}>
                        <div className="check-1-Option vibeCheckOption">Diversao</div>
                        <input type="checkbox" className="check-1-check" />
                    </div>
                </div>
            </div>
        </>
    )
}