import React, { useContext } from "react";
import {CompetitionContext} from '../../Context/CompetitionContext/CompetitionContext'
import useFetch from '../../CustomHook/useFetch'


const TopScorer = () => {
  const {competition} = useContext(CompetitionContext)
  let fetchURL = `https://api.football-data.org/v2/competitions/${competition}/scorers`;

  const data = useFetch(fetchURL) // custom hook avec destructuring
  



  return (
    <div style={{marginTop:'5rem'}}>
      <h2>Top 10 buteurs</h2>
      <ul style={{listStyleType:'none', paddingLeft:'0', marginTop:'1rem'}}>
        {data.map((scorer, index) => (
          <li key={index}>
            <span>
            {scorer.numberOfGoals}
            </span>  
            <img
              style={{margin:'0 0.5rem'}}
              src="https://statorium.com/media/bearleague/events/48x48icons-14.png"
              alt=""
            />
            
            <span>{scorer.player.name}</span>
            <span>{' '}</span>
            <span>({scorer.team.name})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopScorer;
