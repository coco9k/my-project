import { Container, Row, Col } from "react-bootstrap";
import PageAboutCover from '../assets/img/pageabout.png';
import './css/PageAbout.css'

export const PageAbout = () => {

  return (
    <>
      <div className="banner" id="banner">
        <div style={{ maxWidth: '100%' }}>
          <img className="page-about-cover" src={PageAboutCover} alt="aricat-about-cover" />
        </div>
      </div>

      <div className="about" id="about">
        <Container>
          <Row>
            <Col size={12}>
              <h2 className="about_text">TEAMS
                <span>safajk9uigjak9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9sk9igjka89ugja98gjjas89gjs98dkg0ikd90sk0g9s0gfsfsaas9skg09s <a href="/">fasfafafa</a>dasdaasda</span>
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}