import { useState } from 'react'

export default function PromptMood({ parameters, setParameters }) {
    


    const handleMood = (mood) => {
        let ph = parameters;
        ph.mood = mood;
        console.log(ph);
        setParameters(ph);
    }

    return (
        <>
            <div className="promptTitle">Como voce acordou hoje?</div>
            <div className="promptSubtitle">Escolha a opcao que melhor descreve como voce esta se sentindo hoje.</div>

            <div className="promptInteraction promptMood">
                <div className="moodCheckContainer check-1">
                    <div className="check-1-Option moodCheckOption">Triste</div>
                    <input type="checkbox" className="check-1-check" onClick={() => handleMood(0)} />
                </div>
                <div className="moodCheckContainer check-1">
                    <div className="check-1-Option moodCheckOption">Feliz</div>
                    <input type="checkbox" className="check-1-check" onClick={() => handleMood(1)} />
                </div>
            </div>
        </>
    )
}
