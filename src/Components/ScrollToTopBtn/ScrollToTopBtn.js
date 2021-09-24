import React, {useState} from "react";
import Fab from "@mui/material/Fab";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollFunction = ()=>{
    // document.body.scrollTop for IE & FF
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }
  window.onscroll = function(){
    scrollFunction()
     console.log(document.body.scrollTop, document.documentElement.scrollTop)

  }

  const scrollToTop = ()=>{
    document.body.scrollTop =0;
    document.documentElement.scrollTop=0

  }
  return (
    <div>
      {isVisible && 
      
      <Fab color="primary" style={{    position: 'fixed',
      bottom: '30px',
      right: '30px'}} 
      onClick={scrollToTop}
      
      >
         <UpIcon />
      
      </Fab>
    }
    </div>
  );
}
