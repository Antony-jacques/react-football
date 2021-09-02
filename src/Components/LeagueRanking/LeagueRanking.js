import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import imgData from "../../imgData";

const LeagueRanking = () => {
  const [leagueRank, setLeagueRank] = useState([]);

  useEffect(() => {
    fetch(`https://api.football-data.org/v2/competitions/2021/standings`, {
      method: "GET",
      headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
    })
      .then((response) => response.json())
      .then((response) => setLeagueRank(response.standings[0].table));
  }, []);

  console.log("leagueRank", leagueRank);
  return (
    <div>
      LeagueRanking
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rang</th>
            <th>Equipe</th>
            <th>Points</th>
            <th>Joué</th>
            <th>Gagné</th>
            <th>Nul</th>
            <th>Perdu</th>
            <th>Buts inscrits</th>
            <th>Buts encaissés</th>
            <th>Différence de buts</th>
          </tr>
        </thead>
        <tbody>
          {leagueRank.map((rank, index) => (
            <tr>
              <td>{rank.position}</td>
              <td>
                <img
                  style={{ width: "50px", margin: "0 1rem" }}
                  src={imgData[rank.team.id]}
                  alt=""
                />
                {rank.team.name}
              </td>
              <td>{rank.points}</td>
              <td>{rank.playedGames}</td>
              <td>{rank.won}</td>
              <td>{rank.draw}</td>
              <td>{rank.lost}</td>
              <td>{rank.goalsFor}</td>
              <td>{rank.goalsAgainst}</td>
              <td>{rank.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeagueRanking;
