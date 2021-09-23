import React, { useState, useEffect, useContext } from "react";
import imgData from "./imgData";
import { Link } from "react-router-dom";
import "./LiveList.css";
import CompetitionSelector from "../CompetitionSelector/CompetitionSelector";
import { CompetitionContext } from "../../Context/CompetitionContext/CompetitionContext";
import Button from "@mui/material/Button";

export default function LiveList() {
  const [data, setData] = useState([]);

  const { setCompetition } = useContext(CompetitionContext);
  const { competition } = useContext(CompetitionContext);
  const [standings, setStandings] = useState();
  const [currentMatchday, setCurrentMatchday] = useState("1");

  const handleCurrentMatchDay = (el) => {
    setStandings(el);
    setCurrentMatchday(el.season.currentMatchday);
  };
  // ATTENTION 10 API calls per minute
  useEffect(() => {
    fetch(
      `https://api.football-data.org/v2/competitions/${competition}/standings`,
      {
        //récupère le classement et la journée courante
        method: "GET",
        headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
      }
    )
      .then((response) => response.json())
      .then((response) => handleCurrentMatchDay(response));
  }, [competition]);

  useEffect(() => {
    fetch(
      `https://api.football-data.org/v2/competitions/${competition}/matches?matchday=${currentMatchday}`, // récupère les matchs d'une journée en particulier
      {
        method: "GET",
        headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
      }
    )
      .then((response) => response.json())
      .then((response) => setData(response.matches));
  }, [currentMatchday, competition]);

  console.log("data", data);
  //  console.log('standings', standings);
  //  console.log('test', test);

  const competitionGames = [];
  for (let i = 1; i <= 38; i++) {
    competitionGames.push(i);
  }

  const getPreviousGame = () => {
    if (currentMatchday > 1) {
      setCurrentMatchday(currentMatchday - 1);
    }
  };

  const getNextGame = () => {
    if (currentMatchday < 38) {
      setCurrentMatchday(currentMatchday + 1);
    }
  };

  return (
    <div className="live-container">
      <div className="wrapper">
        <div className="seletor-wrapper">
          <CompetitionSelector />
        </div>

        
          {" "}
          <Button onClick={getPreviousGame} variant="outlined">
            Précédent
          </Button>
          {/* <button onClick={getPreviousGame}>Précédent</button> */} <h2 id="current-matchday"><span >Journée</span> {" "}
          {currentMatchday}{" "}</h2>
          <Button onClick={getNextGame} variant="outlined">
            Suivant
          </Button>
          {/* <button  onClick={getNextGame}>Suivant</button> */}
        
        <div>

        Choisir une journée : <select
          onChange={(e) => {
            setCurrentMatchday(e.target.value);
          }}
          name="matchDay"
          id="matchDay"
          >
          <option value={currentMatchday}>{currentMatchday}</option>
          {competitionGames.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
          </div>
        <ul>
          {data[0] &&
            data.map((val, index) => {
              const date = new Date(val.utcDate);
              return (
                <li key={index}>
                  <h3>
                    <img src={imgData[val.homeTeam.id]} alt="" />{" "}
                     {val.homeTeam.name.replace(/FC|Wanderers|Hotspur|& Hove Albion/gi, "")} 
                     - 
                     {val.awayTeam.name.replace(/FC|Wanderers|Hotspur|& Hove Albion/gi, "")}{" "}
                    <img src={imgData[val.awayTeam.id]} alt="" />
                    {/* {val.homeTeam.id} {val.homeTeam.name} - {val.awayTeam.name} {val.awayTeam.id} */}
                  </h3>
                  <h4>
                    {val.status === "FINISHED" &&
                      val.score.fullTime.homeTeam +
                        " - " +
                        val.score.fullTime.awayTeam}

                    {/* La méthode padStart() permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. */}
                    {val.status === "SCHEDULED" &&
                      "à venir: " +
                        date.getDate().toString().padStart(2, "0") +
                        "/" +
                        (date.getMonth() + 1).toString().padStart(2, "0") +
                        " à " +
                        date.getHours() +
                        ":" +
                        date.getMinutes().toString().padStart(2, "0")}

                    {/* {(val.status === "SCHEDULED" && (date.getMonth()+1)>10) && 'à venir ' + (date.getMonth()+1).padStart(2, '0')} */}
                  </h4>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
