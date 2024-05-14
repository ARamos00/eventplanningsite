import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import placeholder from '../assets/placeholder.jpg';

const Section = styled.section`
    padding: 5rem 0;
    background-color: var(--secondary-background);
`;

const ServiceCard = styled(Card)`
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ServicesPage = () => {
    return (
        <div className="services-page">
            <Section className="services-intro">
                <Container>
                    <Row>
                        <Col>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                style={{ color: 'var(--complementary-accent)' }}
                            >
                                Our Services
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{ color: 'var(--text-color)' }}
                            >
                                We offer a wide range of services to cater to all your event planning needs. Whether it's a wedding, corporate event, or a private party, we've got you covered.
                            </motion.p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section className="services-list">
                <Container>
                    <Row>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Wedding Planning</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        From intimate gatherings to grand celebrations, we ensure your wedding day is perfect.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Corporate Events</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        Professional planning for conferences, meetings, and corporate parties.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Private Parties</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        Birthdays, anniversaries, and other special occasions celebrated in style.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Event Design</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        Creative and unique event designs to make your event stand out.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Venue Selection</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        We help you find the perfect venue to match your event's needs.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard>
                                <Card.Img variant="top" src={placeholder} />
                                <Card.Body>
                                    <Card.Title style={{ color: 'var(--primary-color)' }}>Catering Services</Card.Title>
                                    <Card.Text style={{ color: 'var(--text-color)' }}>
                                        Delicious and customizable catering options for all types of events.
                                    </Card.Text>
                                </Card.Body>
                            </ServiceCard>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </div>
    );
};

export default ServicesPage;

