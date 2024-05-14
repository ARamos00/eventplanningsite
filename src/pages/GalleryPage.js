import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import placeholder from '../assets/placeholder.jpg';

const GalleryPage = () => {
    const images = [
        { src: placeholder, alt: 'Event Image 1' },
        { src: placeholder, alt: 'Event Image 2' },
        { src: placeholder, alt: 'Event Image 3' },
        { src: placeholder, alt: 'Event Image 4' },
        { src: placeholder, alt: 'Event Image 5' },
        { src: placeholder, alt: 'Event Image 6' },
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div className="gallery-page">
            <section className="gallery-intro">
                <Container>
                    <Row>
                        <Col>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Event Gallery
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Take a look at some of the amazing events we've had the pleasure to organize.
                            </motion.p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gallery-list">
                <Container>
                    <Row>
                        {images.map((image, index) => (
                            <Col md={4} key={index}>
                                <motion.div
                                    className="gallery-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={image.src} alt={image.alt} className="gallery-image" />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                {lightboxOpen && (
                    <Lightbox
                        open={lightboxOpen}
                        close={handleCloseLightbox}
                        slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
                        index={currentImage}
                    />
                )}
            </section>
        </div>
    );
};

export default GalleryPage;

