import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/aricat-logo.png";
import mcoLogo from "../assets/img/mco.png";
import aricatLogo from "../assets/img/aricat.png";
import vsusLogo from "../assets/img/vsus.png";
import cloverLogo from "../assets/img/clover.png";
import navIconFb from "../assets/img/footer-icon-facebook.png";
import navIconIg from "../assets/img/footer-icon-instagram.png";
import navIconYt from "../assets/img/footer-icon-youtube.png";
import navIconTw from "../assets/img/footer-icon-twitch.png";
import Carousel from 'react-multi-carousel';
import './css/Footer.css'

export const Footer = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="sponsor-bx wow slideInUp" style={{ textAlign: "center" }}>
              <Row>
                <h2 className="sponsor_text">SPONSORS
                  <span>ผู้สนับสนุน</span>
                </h2>
                <Carousel responsive={responsive} infinite={true} className="sponsor-slider">
                  <div className="item-sponsor">
                    <img src={mcoLogo} alt="mco-groud" />
                  </div>
                  <div className="item-sponsor">
                    <img src={aricatLogo} alt="aricat" />
                  </div>
                  <div className="item-sponsor">
                    <img src={vsusLogo} alt="vsus-pro" />
                  </div>
                  <div className="item-sponsor">
                    <img src={cloverLogo} alt="clover-solution" />
                  </div>
                </Carousel>
              </Row>
            </div>
          </Col>

          <Col size={12} sm={6} className="footer-logo">
            <img src={logo} alt="aricat-logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/AricatEsport" target="_blank" rel="noreferrer"><img src={navIconFb} alt="Icon-fb" /></a>
              <a href="https://www.instagram.com/aricat.esports/" target="_blank" rel="noreferrer"><img src={navIconIg} alt="Icon-ig" /></a>
              <a href="https://www.youtube.com/channel/UC98DSvjg_7iV8UY7UYW8OKg" target="_blank" rel="noreferrer"><img src={navIconYt} alt="Icon-yt" /></a>
              <a href="https://www.twitch.tv/aricat_esport" target="_blank" rel="noreferrer"><img src={navIconTw} alt="Icon-tw" /></a>
            </div>
            <p>Copyright &copy; 2022 Aricat Esport. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}