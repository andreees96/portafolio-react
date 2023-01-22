import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import slider1 from "../assets/img/slider01.png";
import slider2 from "../assets/img/slider02.png";
import slider3 from "../assets/img/slider03.png";
import slider4 from "../assets/img/slider04.png";
import slider5 from "../assets/img/slider05.png";
import slider6 from "../assets/img/slider06.png";
import project6 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Traveler SPA",
      description: "Traveler SPA",
      imgUrl: slider1,
      url: 'https://traveler-spa-sa.netlify.app/'
    },
    {
      title: "Carrito de compras",
      description: "Carrito de compras front",
      imgUrl: slider2,
      url: 'https://carrito-js01.netlify.app/'
    },
    {
      title: "Seguimiento pacientes React",
      description: "Seguimiento pacientes React",
      imgUrl: slider3,
      url: 'https://citas-react-tailwindjs.netlify.app/'
    },
    {
      title: "Administrador de pacientes JS",
      description: "Administrador de pacientes JS",
      imgUrl: slider4,
      url: 'https://administrar-citas-js.netlify.app/'
    },
    {
      title: "  Blog café",
      description: "Blog Café",
      imgUrl: slider5,
      url: 'https://blog-cafe-proy03.netlify.app/'
    },
    {
      title: "GYM workout",
      description: "GYM Workout wp",
      imgUrl: slider6,
      url: 'https://gymworkoutwp.netlify.app/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
              
              <div >
                <h2>Mis proyectos</h2>
                <p>Proyectos creados con fines educativos</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sección 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Sección 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Proyectos creados con cursos con fines educativos</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Proximamente más proyectos</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
