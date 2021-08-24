import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import './Highlights.css'

const Highlights = () => {
  const dispatch = useDispatch();
  const highlightsStore = useSelector(state => state)

  const getPLHighlights = ()=>{
    dispatch({
      type: 'PREMIERLEAGUE'
    })
  }

  const getAllHighlights = ()=>{
    dispatch({
      type : 'ALLCOMPETITIONS'
    })
  }

  const getFRHighlights = ()=>{
    dispatch({
      type : 'LIGUE1'
    })
  }
  const [data, setData] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [competition, setCompetition] = useState("ENGLAND: Premier League");

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((response) => response.json())
      .then((response) => {
        if (highlightsStore.filter) {
          return setGamesList(
            response.response.filter((game) => game.competition === highlightsStore.competition)
          );
        } else {
          return setGamesList(response.response);
        }
      });
    // .then(response =>  setData(response.response))
  }, [highlightsStore.competition,highlightsStore.filter]);

  return (
    <div>
      <nav>
        <button className={!highlightsStore.filter && 'active'} onClick={getAllHighlights} >Tous les matchs</button>
        <button className={(highlightsStore.filter && highlightsStore.competition === 'FRANCE: Ligue 1' ) && 'active'} onClick={getFRHighlights}>Ligue 1</button>
        <button className={(highlightsStore.filter && highlightsStore.competition === 'ENGLAND: Premier League' ) && 'active'} onClick={getPLHighlights}>Premier League</button>
      </nav>
      {gamesList[0] && (
        <div>
          {gamesList.map((val, index) => {
            return (
              <div key={index}>
                <a href={val.matchviewUrl} target="_blank" rel="noreferrer">
                  <h2>{val.title}</h2>

                  <img src={val.thumbnail} alt="" />
                </a>

                <div>
                  {/* <iframe
                    src={val.matchviewUrl}
                    title={index}
                    frameBorder="0"
                    width="560"
                    height="650"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                  ></iframe> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Highlights;
