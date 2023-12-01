import React, { useState } from 'react';

export default function PromptPopularity({ parameters, setParameters }) {
    const [range, setRange] = useState(50);

    const handleRangeChange = (event) => {
        setRange(event.target.value);

        const ph = parameters;
        ph.popularity = event.target.value;
        console.log(ph.popularity);
        setParameters(ph);
    };


    return (
        <>
            <div className="promptTitle">Está  se sentindo experimental?</div>
            <div className="promptSubtitle">O quão conhecidas você quer que as suas recomendações sejam?</div>
            <div className="promptInteraction promptPopularity">
                <div className="sliderContainer">
                    <div className="sliderSelectionContainer">{range}</div>
                    <div className="slider">
                        <input 
                            value={range}
                            onChange={handleRangeChange}
                            type="range" 
                            min="0" 
                            max="100" 
                            className="sliderInput" />
                    </div>
                </div>
            </div>
        </>
    )
}