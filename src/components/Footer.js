import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pdt">
          <Col size={12} sm={6}>
            <a href="/"><img src={logo} alt="Logo"/></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andres-maldonado-vidal/" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/andreees96" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send/?phone=56950607983&text&type=phone_number&app_absent=0" target='_blank'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Andreees96 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
