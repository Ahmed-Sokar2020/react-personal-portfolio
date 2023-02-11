import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, gitHupLink, liveDemo, imgUrl }) => {
    return (
            <Col size={12} sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt=''/>

                    <div className="proj-txt">
                        <h4>{title}</h4>

                        <a href={gitHupLink} 
                        target="_blank" 
                        rel="noreferrer">
                        GitHup Link
                        </a> <br/>

                        <a href={liveDemo} 
                        target="_blank" 
                        rel="noreferrer">
                        Live Demo
                        </a>

                    </div>
                </div>
            </Col>
        )
}
