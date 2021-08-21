import React, {useState, useEffect} from 'react';

const Highlights = () => {

    const [data, setData] = useState([]);
    const [premierLeague, setPremierLeague] = useState([]);
    const [test, settest] = useState('pouet');


    useEffect(()=>{
        fetch('https://www.scorebat.com/video-api/v3/')
        .then((response) =>  response.json())
          .then(response =>  setPremierLeague(response.response.filter(game => game.competition ===  'ENGLAND: Premier League')))
        // .then(response =>  setData(response.response))



  
    },[])

    return (
        <div>
            {premierLeague[0] && (
                <div>
                    <p>{premierLeague[0].title}</p>

                    {premierLeague.map((val,index)=>{
                        return(
                        <div>
                                                        <iframe src='https://www.scorebat.com/embed/g/1018835/' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' ></iframe>
                            <p>{val.title}</p>
                            <img src={val.thumbnail} alt=""/>
                            {/* {val.videos[0].embed} */}
                            {val.matchviewUrl}

                            <iframe src={val.matchviewUrl}frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen'></iframe>
                            {/* 
                            <iframe src='https://www.scorebat.com/embed/g/1018835/' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                            */}
                        </div>

                        )
                    })}

                </div>
            )}
        </div>
    );
}

export default Highlights;
