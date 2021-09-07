import React, {useState, useEffect} from 'react';

const TopScorer = () => {

    const [topScrorerList, setTopScrorerList] = useState([]);
    const [competition, setCompetition] = useState('PL');
    let fetchURL = `https://api.football-data.org/v2/competitions/${competition}/scorers`

    useEffect(()=>{
        async function getTopScrer(){
           const reponse = await fetch(fetchURL,{
                method: "GET",
                headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" }
          
            })
            const data = await reponse.json();
            setTopScrorerList(data.scorers) ;

            return (reponse);
        }
        getTopScrer()
    },[fetchURL])
    
    console.log('topScrorerList',topScrorerList);
    return (
        <div>
            TopScorer
        </div>
    );
}

export default TopScorer;
