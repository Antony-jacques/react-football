import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import imgData from '../../imgData'
import './SingleMatchDetails.css'


export default function SingleMatchDetails() {
    let {slug} = useParams() // récupère le slug de l'url et le stocke ds la var slug
    const [matchDetails, setMatchDetails] = useState();

    const dispatch = useDispatch()
    const matchDetailsStore = useSelector(state=>state)

    useEffect(()=>{
        fetch(`https://api.football-data.org/v2/matches/${slug}`,
        {
            method: "GET",
            headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
        })
        .then(response => response.json())
        // creer un f qui dispatch + cset  une nouv var refreshSlug qui stock le slug.
        //si !slug -> fetch avec refreshSlug
        .then(response => dispatch({
            type: 'GETMATCH',
            gameDetails : response
        }))

    },[])

    console.log('matchDetails from store', matchDetailsStore.gameDetails)
    console.log(slug)
    return (
        <div>
            SingleMatchDetails
            <p>match : {slug}</p>
                {matchDetailsStore.gameDetails.match && 
            <div className="teamsRow">           
                <div><img src={imgData[matchDetailsStore.gameDetails.match.homeTeam.id]} alt=""/> {matchDetailsStore.gameDetails.match.homeTeam.name}</div>
                <div>{matchDetailsStore.gameDetails.match.awayTeam.name} <img src={imgData[matchDetailsStore.gameDetails.match.awayTeam.id]} alt=""/></div>
            </div>
                }
             

        </div>
    )
}
