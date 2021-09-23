import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Highlights.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";


const Highlights = () => {
  const dispatch = useDispatch();
  const highlightsStore = useSelector((state) => state);

  const getPLHighlights = () => {
    dispatch({
      type: "PREMIERLEAGUE",
    });
  };

  const getAllHighlights = () => {
    dispatch({
      type: "ALLCOMPETITIONS",
    });
  };

  const getFRHighlights = () => {
    dispatch({
      type: "LIGUE1",
    });
  };
  // const [data, setData] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  // const [filter, setFilter] = useState(false);
  // const [competition, setCompetition] = useState("ENGLAND: Premier League");

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((response) => response.json())
      .then((response) => {
        if (highlightsStore.filter) {
          return setGamesList(
            response.response.filter(
              (game) => game.competition === highlightsStore.competition
            )
          );
        } else {
          return setGamesList(response.response);
        }
      });
    // .then(response =>  setData(response.response))
  }, [highlightsStore.competition, highlightsStore.filter]);

  console.log(highlightsStore.competition)
  return (
    <div>
      <nav style={{marginTop: '3rem'}} >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color={
            !highlightsStore.filter &&
            "secondary"
          }
           onClick={getAllHighlights}>Tous les matchs</Button>


          <Button 
          color={
            (highlightsStore.filter &&
            highlightsStore.competition === "FRANCE: Ligue 1") &&
            "secondary"
          }
          onClick={getFRHighlights}>Ligue 1</Button>
          <Button


           color={
            (highlightsStore.filter &&
            highlightsStore.competition === "ENGLAND: Premier League") &&
            "secondary"
          } 
          onClick={getPLHighlights}>Premier League</Button>
        </ButtonGroup>


      </nav>


      {gamesList[0] && (
        <div style={{marginTop: '2rem', display: 'flex',     flexWrap: 'wrap',
        justifyContent: 'space-evenly'}}>
          {gamesList.map((val, index) => {
            return (
              <div className='highlight-card' key={index}>
                <a href={val.matchviewUrl} style={{color:'#192a56', textDecoration:'none'}} target="_blank" rel="noreferrer">
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
