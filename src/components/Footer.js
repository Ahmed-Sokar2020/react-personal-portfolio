import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import logo from "../assets/img/logo.svg";


export const Footer = () => {
	
	
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">

					<MailchimpForm />

					<Col size={12} sm={6}>
						{/* <img src={logo} alt="Logo" /> */}
						<h1 className="footer-logo">Sokar</h1>
					</Col>

					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a 
							href="https://www.linkedin.com/in/ahmed-sokar" 
							target="_blank" 
							rel="noreferrer">
							<img src={navIcon1} alt="" />
							</a>

							<a 
							href="https://github.com/Ahmed-Sokar2020" 
							target="_blank" 
							rel="noreferrer">
							<img src={navIcon2} alt="" />
							</a>

							<a href="https://www.facebook.com/ahmed.elhoseny.9003"
							target="_blank" 
							rel="noreferrer">
							<img src={navIcon3} alt="" />
							</a>
						</div>

						<p className="copyright">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by 
							<a 
							href="https://www.linkedin.com/in/ahmed-sokar" 
							target="_blank" 
							rel="noreferrer"
							> <strong>Ahmed Sokar</strong>
							</a>
						</p>

					</Col>
				</Row>
			</Container>
		</footer>
	)
}
