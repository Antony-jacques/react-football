import React, { useState, useEffect } from "react";

const Highlights = () => {
  const [data, setData] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [competition, setCompetition] = useState('ENGLAND: Premier League');

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((response) => response.json())
      .then((response) => {
          if(filter){
            return(
                setGamesList(
                    response.response.filter(
                      (game) => game.competition === competition
                    )
                  )
            )
          }
          else{
            return(
                setGamesList(
                    response.response
                  )
            )
          }
      }

      );
    // .then(response =>  setData(response.response))
  }, []);

  return (
    <div>
      {gamesList[0] && (
        <div>

          {gamesList.map((val, index) => {
            return (
              <div key={index}>
                  <p>{val.title}</p>


                <img src={val.thumbnail} alt="" />

                <div>
                  <iframe
                    src={val.matchviewUrl}
                    frameBorder="0"
                    width="560"
                    height="650"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                  ></iframe>
                </div>
                {/* 
                            <iframe src='https://www.scorebat.com/embed/g/1018835/' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                            */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Highlights;
