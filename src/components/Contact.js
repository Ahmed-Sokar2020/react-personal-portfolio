import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [errors, setErrors] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }

    const validateForm = () => {
        const newErrors = {};
        if (!formDetails.firstName) newErrors.firstName = 'First name is required';
        if (!formDetails.lastName) newErrors.lastName = 'Last name is required';
        if (!formDetails.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formDetails.phone) newErrors.phone = 'Phone number is required';
        // if (!formDetails.message) newErrors.message = 'Message is required';

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with form submission
            console.log("Form submitted", formDetails);

            setFormDetails(formInitialDetails); // Reset form fields
            setErrors({}); // Clear errors
        } else {
            setErrors(formErrors); // Set errors if validation fails
        }
    };
    

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                        </TrackVisibility>
                    </Col>

                    <Col size={12} md={6} className="p-4">
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className="ps-1">
                                            <input
                                                type="text"
                                                value={formDetails.firstName}
                                                placeholder="First Name"
                                                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                                className={errors.firstName ? 'is-invalid' : ''}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                        </Col>
                                        <Col size={12} sm={6} className="ps-1">
                                            <input
                                                type="text"
                                                value={formDetails.lastName}
                                                placeholder="Last Name"
                                                onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                                className={errors.lastName ? 'is-invalid' : ''}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                        </Col>
                                        <Col size={12} sm={6} className="ps-1">
                                            <input
                                                type="email"
                                                value={formDetails.email}
                                                placeholder="Email Address"
                                                onChange={(e) => onFormUpdate('email', e.target.value)}
                                                className={errors.email ? 'is-invalid' : ''}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </Col>
                                        <Col size={12} sm={6} className="ps-1">
                                            <input
                                                type="tel"
                                                value={formDetails.phone}
                                                placeholder="Phone No."
                                                onChange={(e) => onFormUpdate('phone', e.target.value)}
                                                className={errors.phone ? 'is-invalid' : ''}
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                        </Col>
                                        <Col size={12} className="ps-1">
                                            <textarea
                                                rows="6"
                                                value={formDetails.message}
                                                placeholder="Message"
                                                onChange={(e) => onFormUpdate('message', e.target.value)}
                                            ></textarea>
                                            <button type="submit"><span>Send</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

