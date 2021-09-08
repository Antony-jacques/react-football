import React, { useState, useEffect, useContext } from "react";
import {CompetitionContext} from '../../Context/CompetitionContext/CompetitionContext'
import useFetch from '../../CustomHook/useFetch'


const TopScorer = () => {
  // const [topScrorerList, setTopScrorerList] = useState([]);
  const {competition} = useContext(CompetitionContext)
  let fetchURL = `https://api.football-data.org/v2/competitions/${competition}/scorers`;

  const data = useFetch(fetchURL) // custom hook avec destructuring
  console.log("TopScorer -> data", data)
  

  // useEffect(() => {
  //   async function getTopScrer() {
  //     const reponse = await fetch(fetchURL, {
  //       method: "GET",
  //       headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
  //     });
  //     const data = await reponse.json();
  //     setTopScrorerList(data.scorers);

  //     return reponse;
  //   }
  //   getTopScrer();
  // }, [fetchURL]);

  return (
    <div style={{marginTop:'5rem'}}>
      <h2>Top 10 buteurs</h2>
      <ul>
        {data.map((scorer, index) => (
          <li key={index}>
            <span>
            {scorer.numberOfGoals}
            </span>  
            <img
              src="https://statorium.com/media/bearleague/events/48x48icons-14.png"
              alt=""
            />
            
            <span>{scorer.player.name}</span>
            <span>({scorer.team.name})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopScorer;
