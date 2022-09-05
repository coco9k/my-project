import { Container, Row, Col } from "react-bootstrap";
import { TournamentCard } from "../components/TournamentCard"
import TrackVisibility from 'react-on-screen';
import PageTournamentCover from '../assets/img/pagetournament.png';
import './css/PageTournament.css';

export const PageTournament = () => {

  return (
    <>
      <div className="banner" id="banner">
        <div style={{ maxWidth: '100%' }}>
          <img className="page-tournament-cover" src={PageTournamentCover} alt="aricat-about-cover" />
        </div>
      </div>

      <div className="tournament" id="tournament">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="tournament_text">Aricat Studio
                      <span>Tournament</span>
                    </h2>
                    <TournamentCard />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
