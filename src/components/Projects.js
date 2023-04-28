import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/proj1.PNG";
import projImg2 from "../assets/img/proj2.PNG";
import projImg3 from "../assets/img/proj3.PNG";
import projImg4 from "../assets/img/proj4.PNG";
import projImg5 from "../assets/img/react-cart.png";
import projImg6 from "../assets/img/portfolio.PNG";
import projImg7 from "../assets/img/angular.jpg";
import projImg8 from "../assets/img/proj6.PNG";
import projImg9 from "../assets/img/proj5.PNG";

// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
        id: 1,    
        title: "Shopping_Cart_JS",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/Shopping_Cart_JS",
        liveDemo: "https://ahmed-sokar2020.github.io/Shopping_Cart_JS",
        imgUrl: projImg1,
        },
        {
        id: 2,    
        title: "Landing Page",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/Food-And-Restaurant-Landing-Page",
        liveDemo: "https://ahmed-sokar2020.github.io/Food-And-Restaurant-Landing-Page/",
        imgUrl: projImg2,
        },
        {
        id: 3,
        title: "Landing Page/TailwindCSS",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/Tailwindcss-Project",
        liveDemo: "https://ahmed-sokar2020.github.io/Tailwindcss-Project",
        imgUrl: projImg3,
        },
        {
        id: 4,
        title: "Landing Page",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/My-Second-Template",
        liveDemo: "https://ahmed-sokar2020.github.io/My-Second-Template",
        imgUrl: projImg4,
        },
        {
        id: 5,
        title: "React-TS-ShoppingCart",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/React-TS-ShoppingCart",
        liveDemo: "https://ahmed-sokar2020.github.io/React-TS-ShoppingCart",
        imgUrl: projImg5,
        },
        {
        id: 6,
        title: "My Portfolio/React.js",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/personal-portfolio",
        liveDemo: "https://ahmed-sokar2020.github.io/personal-portfolio",
        imgUrl: projImg6,
        },
    ];

    const anotherProjects = [
        {
        id: 7,
        title: "Angular App",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/My-First-Angular-Project",
        liveDemo: "https://ahmed-sokar2020.github.io/My-First-Angular-Project",
        imgUrl: projImg7,    
        },
        {
        id: 8,
        title: "Landing Page",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/Project-3-Sokar-Studio",
        liveDemo: "https://ahmed-sokar2020.github.io/Project-3-Sokar-Studio",
        imgUrl: projImg8,
        },
        {
        id: 9,
        title: "Landing Page",
        gitHupLink: "https://github.com/Ahmed-Sokar2020/My-First-Tempelate",
        liveDemo: "https://ahmed-sokar2020.github.io/My-First-Tempelate",
        imgUrl: projImg9,
        }
    ]


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>

                            <p>I have a diverse portfolio of projects that showcase my skills and demonstrate my commitment to delivering results
                                , I am passionate about bringing my best to every project and delivering results that exceed expectations.
                            </p>

                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                            projects.map((project) => {
                                                return (
                                                <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    />
                                                )
                                            })
                                            }
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                            anotherProjects.map((project) => {
                                                return (
                                                <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    />
                                                )
                                            })
                                            }
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <p style={{color:'red'}}>No Projects Here Yet!</p>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp2} alt=''></img>
        
        </section>
    )
}
