import React, { useContext } from "react";
import { CompetitionContext } from "../../Context/CompetitionContext/CompetitionContext";
import "./CompetitionSelector.css";
import Nav from "react-bootstrap/Nav";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const CompetitionSelector = () => {
  const { setCompetition } = useContext(CompetitionContext);
  const { competition } = useContext(CompetitionContext);

  return (
    <div style={{marginTop:'3rem'}}>

<ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >



          <Button


           color={
            competition ==='PL' &&
            "secondary"
          } 
          onClick={() => setCompetition("PL")}>Premier League</Button>
          <Button 
          color={
            competition ==='FL1' &&
            "secondary"
          }
          onClick={() => setCompetition("FL1")}>Ligue 1</Button>
        </ButtonGroup>




    </div>
  );
};

export default CompetitionSelector;
