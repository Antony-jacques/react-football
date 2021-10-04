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

  return (
    <div>
      <CompetitionSelector/>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rang</th>
            <th>Equipe</th>
            <th>Points</th>
            <th className="to-hide" >Joué</th>
            <th className="to-hide">Gagné</th>
            <th className="to-hide">Nul</th>
            <th className="to-hide">Perdu</th>
            <th className="to-hide">Buts inscrits</th>
            <th className="to-hide">Buts encaissés</th>
            <th className="to-hide">Différence de buts</th>
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
              <td className="to-hide">{rank.playedGames}</td>
              <td className="to-hide">{rank.won}</td>
              <td className="to-hide">{rank.draw}</td>
              <td className="to-hide">{rank.lost}</td>
              <td className="to-hide">{rank.goalsFor}</td>
              <td className="to-hide">{rank.goalsAgainst}</td>
              <td className="to-hide">{rank.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeagueRanking;
