import React, { useState, useEffect } from "react";

export default function LiveList() {
  const [data, setData] = useState([]);
  const [currentPLmatchday, setCurrentPLmatchday] = useState("3");
  const [matchDay, setMatchDay] = useState('');

  useEffect(() => {
    fetch(
      `https://api.football-data.org/v2/competitions/PL/matches?matchday=${currentPLmatchday}`,
      {
        method: "GET",
        headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
      }
    )
      .then((response) => response.json())
      .then((response) => setData(response.matches))
  }, [currentPLmatchday]);

  console.log(data);

  return (
    <div>
      LiveList
      <h2>Journéee {currentPLmatchday}</h2>
      <select
        onChange={(e) => {
          setCurrentPLmatchday(e.target.value);
        }}
        name="matchDay"
        id="matchDay"
      >
        <option value={currentPLmatchday}>{currentPLmatchday}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul>
        {data[0] &&
          data.map((val, index) => {
            const date = new Date(val.utcDate);
            console.log(date)
            return (
              <li key={index}>
                <h3>
                  {val.homeTeam.name} - {val.awayTeam.name}
                </h3>
                <h4>
                {val.status === 'FINISHED' && val.score.fullTime.homeTeam + ' - ' + val.score.fullTime.awayTeam }
                {/* {(val.status === "SCHEDULED" && (date.getMonth()+1)<10) && 'à venir ' + date.getDate() + '/' + 0 +  (date.getMonth()+1) + ' à ' + date.getHours() + ':' + (date.getMinutes().toString().padStart(2, '0'))} */}
                {/* La méthode padStart() permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. */}
                {val.status === "SCHEDULED"  && 'à venir ' + date.getDate() + '/' + (date.getMonth()+1).toString().padStart(2, '0') + ' à ' + date.getHours() + ':' + (date.getMinutes().toString().padStart(2, '0'))}

                {/* {(val.status === "SCHEDULED" && (date.getMonth()+1)>10) && 'à venir ' + (date.getMonth()+1).padStart(2, '0')} */}
                </h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
