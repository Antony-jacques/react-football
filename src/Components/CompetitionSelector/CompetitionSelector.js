import React, { useContext } from "react";
import { CompetitionContext } from "../../Context/CompetitionContext/CompetitionContext";
import "./CompetitionSelector.css";
import Nav from "react-bootstrap/Nav";

const CompetitionSelector = () => {
  const { setCompetition } = useContext(CompetitionContext);
  const { competition } = useContext(CompetitionContext);

  return (
    <div style={{marginTop:'3rem'}}>
      <Nav variant="pills" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link onClick={() => setCompetition("PL")} eventKey="link-1">
            Premier League
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setCompetition("FL1")} eventKey="link-2">
            Ligue 1
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CompetitionSelector;
