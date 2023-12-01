import { useState } from 'react'


export default function PromptDuration({ parameters, setParameters }) {
    const [range, setRange] = useState(50);

    const handleRangeChange = (event) => {
        setRange(event.target.value);

        const ph = parameters;
        ph.duration = (event.target.value / 100) * 240000
        console.log(ph.duration);
        setParameters(ph);
    };




    return (
        <>
            <div className="promptTitle">Duracao</div>
            <div className="promptSubtitle">Determine o quao longas serao suas musicas recomendadas</div>
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