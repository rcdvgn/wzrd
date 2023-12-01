import { useState, useEffect } from 'react'
import { webpack } from "../modules-fund/modules-fund"
import getRecs from '../api/getRecs';

export default function Results({ parameters, setParameters, accessToken }){

    const [recs, setRecs] = useState("");

    function getRecommendations({ p }){
        let x = webpack(parameters.p);
        setRecs(x);
        console.log(x);
        const ph = getRecs({accessToken, parameters, p});
        console.log(ph);
        if (ph) {
            setRecs(ph.tracks);
            console.log(ph.tracks);
        }
        
    }


    useEffect(() => {
        const p = parameters.p;
        getRecommendations(p)
    }, [])

    return (
        <>
            <div className="promptTitle">Parabens!</div>
            <div className="promptSubtitle">Esperamos que goste da sua recomendação</div>

            <div className="promptInteraction f">
                <div className="wrapper">
                    <img src={recs.img} className='img' />
                    <div className="title">{recs.title}</div>
                    <div className="artist">{recs.artist}</div>
                </div>
            </div>
        </>
    )
}