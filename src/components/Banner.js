import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Link } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Developer", "FullStack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    // background img se pasa desde css
    return(
        //animación con css
        <section className="banner" id="Home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenidos a mi Portafolio</span>
                        <h1>{'Soy andrés, '}<span className="wrap">{text}</span></h1>
                        <p>Tengo 26 años y vivo en Santiago de Chile. Titulado como Técnico en Informática y egresado como Ingeniero en Informática con Mención en Desarrollo de Sistemas. Me apasiona el desarrollo por lo que, de forma autodidacta, he realizado cursos de desarrollo y lógica para aprender más sobre el tema.</p>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1ZX4Cel7lVO1uXvd7CoEwlWijtdsxQBdf/view?usp=sharing')}>CV<ArrowRightCircle/></button>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1lZQ6vZ-MsRtSiPpRXsynUPkzQjHj-lc4/view?usp=sharing')} >Certificados<ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}