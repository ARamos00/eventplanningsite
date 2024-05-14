import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

import placeholder from '../assets/placeholder.jpg';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <section className="contact-intro">
                <Container>
                    <Row>
                        <Col>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Contact Us
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                We would love to hear from you! Whether you have a question about our services, need assistance with planning your event, or just want to say hello, our team is here to help.
                            </motion.p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="contact-form-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h2>Contact Form</h2>
                                <Form>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group controlId="formPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your phone number" />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Your message" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </motion.div>
                        </Col>

                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <h2>Contact Details</h2>
                                <p>
                                    <strong>Phone:</strong> (123) 456-7890
                                </p>
                                <p>
                                    <strong>Email:</strong> info@eventplanning.com
                                </p>
                                <p>
                                    <strong>Address:</strong> 123 Event Street, Party City, PC 12345
                                </p>
                                <h2>Follow Us</h2>
                                <p>
                                    <a href="https://facebook.com">
                                        <i className="fab fa-facebook-f"></i> Facebook
                                    </a>
                                </p>
                                <p>
                                    <a href="https://twitter.com">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </a>
                                </p>
                                <p>
                                    <a href="https://instagram.com">
                                        <i className="fab fa-instagram"></i> Instagram
                                    </a>
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ContactPage;
