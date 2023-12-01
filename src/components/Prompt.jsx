

export default function Prompt({ progress, setProgress, prompts }) {

    const handleBack = () => {
        prompts[progress - 1] ? setProgress(currentProgress => currentProgress - 1) : '';
    }
    const handleNext = () => {
        prompts[progress + 1] ? setProgress(currentProgress => currentProgress + 1) : '';
    }

    return (
        <div className="prompt">
            <div className="controls">
                <div className="controlsWrapper">
                    <div className="progressStatus">{progress}</div>
                    <div className="control btn-1" onClick={handleBack}>Voltar</div>
                </div>
                <div className="controlFiller"></div>
            </div>

            <div className="promptBody">
                <div className="progressTabs"></div>
                
                {prompts[progress]}
            </div>

            <div className="controls">
                <div className="controlFiller"></div>
                <div className="controlsWrapper">
                    <div className="restartBtn"></div>
                    <div className="control btn-1" onClick={handleNext}>Continuar</div>
                </div>
            </div>
        </div>
    )
  
}