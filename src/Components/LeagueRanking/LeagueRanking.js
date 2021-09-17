import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import imgData from "../../imgData";
import {CompetitionContext} from '../../Context/CompetitionContext/CompetitionContext'
import CompetitionSelector from '../CompetitionSelector/CompetitionSelector'

const LeagueRanking = () => {
  const [leagueRank, setLeagueRank] = useState([]);
  const {competition} = useContext(CompetitionContext)
  const fetchURL = `https://api.football-data.org/v2/competitions/${competition}/standings`

  useEffect(() => {
    async function getRanking(){
      let response =   await  fetch(fetchURL, {
        method: "GET",
        headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
      })
      let data = await response.json()
      setLeagueRank(data.standings[0].table)
    }
    getRanking()


  }, [fetchURL]);

  //console.log("competition", competition);
  return (
    <div>
      <CompetitionSelector/>
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
            <tr key={index}>
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
