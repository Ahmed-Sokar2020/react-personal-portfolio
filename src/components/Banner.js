import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";
import {BrowserRouter as Router} from "react-router-dom";
// CV
// https://drive.google.com/file/d/1tx4nSLAeTkChyOLOmkDsB_1t_T708TEI/view?usp=share_link
export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Frontend Developer ", "Software Engineer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
		tick();
		}, delta);

		return () => { clearInterval(ticker) };
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
		setDelta(prevDelta => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex(prevIndex => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex(prevIndex => prevIndex + 1);
		}
	}


	return (
		<Router>
			<section className="banner" id="about">
				<Container>
					<Row className="aligh-items-center">
						<Col xs={12} md={6} xl={7}>
							<TrackVisibility>
								{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<span className="tagline">Welcome to my Portfolio</span>
									
									<h1>Hi, I'm Ahmed Sokar <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Frontend Developer ", "Software Engineer"]'><span className="wrap">{text}</span></span></h1>
									
									<p>
										Frontend developer with +2 years of experience in building responsive websites and web applications with HTML, CSS, SASS, Bootstrap, JavaScript, ES6, and TypeScript, working with frameworks like React and Angular. Interested in both sides of a fantastic user interface and clean code with performance. Ambitious and maintaining up-to-date awareness of technological trends and technological advances.
									</p>

									<div className="d-flex align-items-center ">
										<HashLink to='#connect'>
											<button > Let’s Connect <ArrowRightCircle size={25} /></button>
										</HashLink>

										<button className="downloadBtn ms-4">
											<a href='https://drive.google.com/file/d/1tx4nSLAeTkChyOLOmkDsB_1t_T708TEI/view?usp=share_link' 
											target="_blank" 
											rel="noreferrer">
												<span>Download CV</span>
											</a>
										</button>

									</div>
								</div>}
							</TrackVisibility>
						</Col>

						<Col xs={12} md={6} xl={5}>
							<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
									<img src={headerImg} alt="Header Img"/>
								</div>}
							</TrackVisibility>
						</Col>
					</Row>
				</Container>
			</section>
		</Router>
	)
}
