import React, {useContext} from 'react';
import {CompetitionContext} from '../../Context/CompetitionContext/CompetitionContext'

const CompetitionSelector = () => {
    const {setCompetition} = useContext(CompetitionContext)

    return (
        <div>
      <nav>
        <button 
        onClick={()=>setCompetition('FL1')}
        >Ligue 1</button>
        <button 
        // onClick={getPLHighlights}
        >Premier League</button>
      </nav>
        </div>
    );
}

export default CompetitionSelector;
