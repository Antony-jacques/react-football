import React , {useState, createContext} from 'react';


export const CompetitionContext = createContext()

export default function CompetitionProvider(props){
    const [competition, setCompetition] = useState('PL');
    return (
        <CompetitionContext.Provider value={{competition, setCompetition}}>
            {props.children}
        </CompetitionContext.Provider>
    );
}


