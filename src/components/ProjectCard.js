import { Col } from "react-bootstrap";

export const ProjectCard = ({tittle, description, imgUrl, url}) =>{
    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{tittle}</h4>
                    <span>{description}</span>
                    <a className="non-style" href={url} target='_blank'>Visitar</a>
                </div>
                
            </div>
        </Col>
    )
}