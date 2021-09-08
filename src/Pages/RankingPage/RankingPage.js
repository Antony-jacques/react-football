import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from '../../Components/PrivateNavbar/PrivateNavbar'
import LeagueRanking from '../../Components/LeagueRanking/LeagueRanking'
import TopScorer from '../../Components/TopScorer/TopScorer'
import TopAssist from '../../Components/TopAssist/TopAssist'



const RankingPage = () => {
    return (
        <div>
            <Navbar/>
            <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
    <LeagueRanking/>
    </Col>
    <Col xs={12} md={4}>
      <TopScorer/>

    </Col>
  </Row>
</Container>
        </div>
    );
}

export default RankingPage;
