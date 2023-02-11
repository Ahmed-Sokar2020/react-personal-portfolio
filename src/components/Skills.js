import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import es6 from "../assets/img/es6.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import sass from "../assets/img/sass.svg";
import angular from "../assets/img/angular.svg";
import typescript from "../assets/img/typescript.svg";
import react from "../assets/img/react.svg";
import hooks from "../assets/img/hooks.svg";
import redux from "../assets/img/redux.svg";
import webDevelopment from "../assets/img/web-coding.svg";
import nextJs from "../assets/img/nextJs.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 3
		},
		desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
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
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>

							<p>I consistently deliver high-quality results for clients and possess a passion for continuous learning and improvement. Ready to take on challenging projects and drive success.</p>
							
							<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
								<div className="item">
									<img src={meter3} alt="img" />
									<h5>Web Development</h5> 
									<img src={webDevelopment} alt="img" />
								</div>

								<div className="item">
									<img src={meter1} alt="img" />
									<h5>HTML/HTML5</h5>
									<img src={html} alt="img" />

								</div>

								<div className="item">
									<img src={meter3} alt="img" />
									<h5>CSS/CSS3</h5>
									<img src={css} alt="img" />
								</div>

								<div className="item">
									<img src={meter3} alt="img" />
									<h5>JavaScript</h5>
									<img src={javascript} alt="img" />
								</div>

								<div className="item">
									<img src={meter1} alt="img" />
									<h5>ES6</h5>
									<img src={es6} alt="img" />
								</div>

								<div className="item">
									<img src={meter3} alt="img" />
									<h5>Bootstrap5</h5>
									<img src={bootstrap} alt="img" />
								</div>
								<div className="item">
									<img src={meter3} alt="img" />
									<h5>sass</h5>
									<img src={sass} alt="img" />
								</div>

								<div className="item">
									<img src={meter2} alt="img" />
									<h5>Angular</h5>
									<img src={angular} alt="img" />
								</div>

								<div className="item">
									<img src={meter2} alt="img" />
									<h5>Typescript</h5>
									<img src={typescript} alt="img" />
								</div>

								<div className="item">
									<img src={meter2} alt="img" />
									<h5>React.Js</h5>
									<img src={react} alt="img" />
								</div>

								<div className="item">
									<img src={meter2} alt="img" />
									<h5>React Hooks</h5>
									<img src={hooks} alt="img" />
								</div>

								<div className="item">
									<img src={meter2} alt="img" />
									<h5>Redux Toolkit</h5>
									<img src={redux} alt="img" />
								</div>

								<div className="item">
									<img src={meter3} alt="img" />
									<h5>NextJs</h5>
									<img src={nextJs} alt="img" />
								</div>
							
							</Carousel>
						</div>
					</div>
				</div>
			</div>

			<img className="background-image-left" src={colorSharp} alt="img" />
			
		</section>
	)
}
