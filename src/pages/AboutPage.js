// src/pages/AboutPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import placeholder from '../assets/placeholder.jpg';

const Section = styled.section`
    padding: 5rem 0;
    background-color: ${({ bgColor }) => bgColor || 'var(--secondary-background)'};
    text-align: center;
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: var(--complementary-accent);
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-color);
`;

const TeamCard = styled(Card)`
  margin-bottom: 30px;
  background-color: var(--secondary-background);
  color: var(--text-color);
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AboutPage = () => {
    return (
        <div className="about-page">
            <Section className="intro-section" bgColor="var(--background-dark)">
                <Container>
                    <Row>
                        <Col>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                About Us
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                We are a team of professional event planners dedicated to making your events memorable and seamless. With years of experience and a passion for perfection, we bring your vision to life.
                            </motion.p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="mission-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Image src={placeholder} alt="Event" />
                        </Col>
                        <Col md={6}>
                            <Title>Our Mission</Title>
                            <Paragraph>Our mission is to provide exceptional event planning services that exceed our clients' expectations. We strive to create unforgettable experiences with meticulous attention to detail and personalized service.</Paragraph>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="team-section" bgColor="var(--background-dark)">
                <Container>
                    <Title>Meet Our Team</Title>
                    <Row className="mt-4">
                        <Col md={6}>
                            <TeamCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title>John Doe</Card.Title>
                                    <Card.Text>Founder & Lead Planner</Card.Text>
                                </Card.Body>
                            </TeamCard>
                        </Col>
                        <Col md={6}>
                            <TeamCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title>Jane Smith</Card.Title>
                                    <Card.Text>Co-Founder & Creative Director</Card.Text>
                                </Card.Body>
                            </TeamCard>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="experience-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Title>Our Experience</Title>
                            <Paragraph>With over a decade of experience in the event planning industry, we have successfully organized countless events ranging from intimate gatherings to grand celebrations. Our expertise ensures a seamless and stress-free experience for our clients.</Paragraph>
                        </Col>
                        <Col md={6}>
                            <Image src={placeholder} alt="Experience" />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </div>
    );
};

export default AboutPage;

