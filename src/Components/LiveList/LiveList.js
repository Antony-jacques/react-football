import React, { useState, useEffect } from "react";
import imgData from './imgData'
import { Link } from "react-router-dom";


export default function LiveList() {
  const [data, setData] = useState([]);
  const [competition, setCompetition] = useState("");
   const [standings, setStandings] = useState();
  const [currentMatchday, setCurrentMatchday] = useState("1");

  const handleCurrentMatchDay = (el) => {
    setStandings(el)
    setCurrentMatchday(el.season.currentMatchday);
  };
// ATTENTION 10 API calls per minute
  useEffect(() => {
    fetch("https://api.football-data.org/v2/competitions/2021/standings", {
      method: "GET",
      headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
    })
      .then((response) => response.json())
      .then((response) => handleCurrentMatchDay(response));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.football-data.org/v2/competitions/PL/matches?matchday=${currentMatchday}`,
      {
        method: "GET",
        headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
      }
    )
      .then((response) => response.json())
      .then((response) => setData(response.matches));
  }, [currentMatchday]);

   console.log('data', data);
  //  console.log('standings', standings);
  //  console.log('test', test);

  const competitionGames = [];
  for (let i = 1; i <= 38; i++) {
    competitionGames.push(i);
  }

  const getPreviousGame = ()=>{
    if(currentMatchday>1){

      setCurrentMatchday(currentMatchday-1)
    }
  }

  const getNextGame = ()=>{
    if(currentMatchday<38){

      setCurrentMatchday(currentMatchday+1)
    }
  }



  return (
    <div>
      LiveList
      <h2>
        {" "}
        <button onClick={getPreviousGame}>Précédent</button> Journée {currentMatchday}{" "}
        <button  onClick={getNextGame}>Suivant</button>
      </h2>
      <select
        onChange={(e) => {
          setCurrentMatchday(e.target.value);
        }}
        name="matchDay"
        id="matchDay"
      >
        <option value={currentMatchday}>{currentMatchday}</option>
        {competitionGames.map((val, index) => (
          <option value={val}>{val}</option>
        ))}
      </select>
      <ul>
        {data[0] &&
          data.map((val, index) => {
            const date = new Date(val.utcDate);
            return (
              <li key={index}>
                <h3>
                <img src={imgData[val.homeTeam.id]} alt=""/> {val.homeTeam.name} - {val.awayTeam.name} <img src={imgData[val.awayTeam.id]} alt=""/>
                {/* {val.homeTeam.id} {val.homeTeam.name} - {val.awayTeam.name} {val.awayTeam.id} */}
                </h3>
                <h4>
                  <Link to={`/match/${val.id}`}>
                  {val.status === "FINISHED" &&
                    val.score.fullTime.homeTeam +
                      " - " +
                      val.score.fullTime.awayTeam}
</Link>

                  {/* La méthode padStart() permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. */}
                  {val.status === "SCHEDULED" &&
                    "à venir " +
                      date.getDate() +
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
  );
}
