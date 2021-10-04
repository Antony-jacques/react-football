import React, {useState} from "react";
import Fab from "@mui/material/Fab";
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';

const GoToTchatBtn = (chatAnchor) => {

    const [isVisible, setIsVisible] = useState(true);

    window.onscroll = function(){
        const ieAndFFoxScroll = document.body.scrollTop;
        const gChromeScroll = document.documentElement.scrollTop;
            const tchatPosition= chatAnchor.chatAnchor.current.offsetTop
            console.log("window.onscroll -> chatAnchor", chatAnchor)

    
          console.log('scroll du chat',tchatPosition)
         console.log('gChromeScroll',gChromeScroll)
          if((gChromeScroll+150) > tchatPosition ){
             setIsVisible(false)
          } else{
             setIsVisible(true)

          }
         
    
      }

      const goToTchat = ()=>{
        chatAnchor.chatAnchor.current.scrollIntoView({ behaviour: "smooth" })
      }
    
  return (
      
    <div onClick={goToTchat} className='goToTchatBtn'  style={{    position: 'fixed',
    bottom: '30px',
    right: '30px',
    opacity:'0.8'}} >
        {isVisible &&
      <Fab color="secondary" aria-label="edit">
        <ForumTwoToneIcon />
      </Fab>
        
        
        }
    </div>
  );
};

export default GoToTchatBtn;
