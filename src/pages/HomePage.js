import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import heroImage from '../assets/hero.jpg';
import service1Image from '../assets/service1.jpg';
import service2Image from '../assets/service2.jpg';
import service3Image from '../assets/service3.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import testimonialImage from '../assets/testimonial.jpg';

const HeroSection = styled.section`
    background: url(${heroImage}) no-repeat center center/cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
`;

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.5);
    padding: 100px 20px;
    width: 100%;
`;

const Section = styled.section`
    padding: 5rem 0;
    text-align: center;
`;

const ServiceCard = styled(Card)`
    margin-bottom: 30px;
`;

const GalleryImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: block;
    object-fit: cover;
`;

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection>
                <Overlay>
                    <Container>
                        <Row>
                            <Col>
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Making Your Dream Event a Reality
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    Professional Event Planning & Organizing Services
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <Button variant="primary" href="/services">Our Services</Button>
                                    <Button variant="secondary" href="/contact" className="ml-3">Get a Quote</Button>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </Overlay>
            </HeroSection>

            <Section className="about-section">
                <Container>
                    <Row>
                        <Col>
                            <h2>About Us</h2>
                            <p>We are a team of professional event planners dedicated to making your events memorable and seamless. With years of experience and a passion for perfection, we bring your vision to life.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="services-section">
                <Container>
                    <h2 className="text-center">Our Services</h2>
                    <Row className="mt-4">
                        <Col md={4} sm={6}>
                            <ServiceCard>
                                <Card.Img variant="top" src={service1Image} />
                                <Card.Body>
                                    <Card.Title>Comprehensive Event Planning</Card.Title>
                                    <Card.Text>Flawless event planning from start to finish.</Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4} sm={6}>
                            <ServiceCard>
                                <Card.Img variant="top" src={service2Image} />
                                <Card.Body>
                                    <Card.Title>Wedding Coordination</Card.Title>
                                    <Card.Text>Making your special day stress-free and magical.</Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4} sm={6}>
                            <ServiceCard>
                                <Card.Img variant="top" src={service3Image} />
                                <Card.Body>
                                    <Card.Title>Custom Decorations</Card.Title>
                                    <Card.Text>Breathtaking, personalized decorations for any event.</Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="testimonials-section">
                <Container>
                    <h2 className="text-center">Testimonials</h2>
                    <Row className="mt-4">
                        <Col>
                            <Card className="testimonial-card">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>"Our wedding was perfect, thanks to their amazing coordination and planning!"</p>
                                        <footer className="blockquote-footer">Jane Doe</footer>
                                    </blockquote>
                                </Card.Body>
                                <Card.Img variant="bottom" src={testimonialImage} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="gallery-section">
                <Container>
                    <h2 className="text-center">Gallery</h2>
                    <Row className="mt-4">
                        <Col md={4} sm={6}>
                            <GalleryImage src={gallery1} alt="Gallery Image 1" />
                        </Col>
                        <Col md={4} sm={6}>
                            <GalleryImage src={gallery2} alt="Gallery Image 2" />
                        </Col>
                        <Col md={4} sm={6}>
                            <GalleryImage src={gallery3} alt="Gallery Image 3" />
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="contact-section">
                <Container>
                    <Row>
                        <Col>
                            <h2>Contact Us</h2>
                            <p>Ready to plan your next event? Get in touch with us today!</p>
                            <Button variant="primary" href="/contact">Contact Us</Button>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </div>
    );
};

export default HomePage;

