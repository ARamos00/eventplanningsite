import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #FF6347;  // Tomato for accents
        --background-dark: #121212;  // Very dark gray for primary backgrounds
        --text-color: #E0E0E0;  // Light gray for primary text
        --link-hover-color: #FFD700;  // Bright gold for hover effects
        --secondary-background: #1F1F1F;  // Slightly lighter dark gray for content backgrounds
        --complementary-accent: #00A8CC;  // Cyan for highlights
        --header-background: #1A1A1A;  // Dark gray for header background
        --header-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);  // Shadow for header
        --nav-item-hover-bg: #FF6347;  // Background color for nav items on hover
        --nav-item-hover-color: #FFFFFF;  // Text color for nav items on hover
        --footer-background: #1A1A1A;  // Dark gray for footer background
    }

    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: 'Lobster', cursive;
        background-color: var(--background-dark);
        color: var(--text-color);
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
        transition: color 0.3s ease;
    }

    a:hover {
        text-decoration: underline;
        color: var(--link-hover-color);
    }

    .hero-section {
        background: linear-gradient(135deg, #121212 0%, #1F1F1F 100%);
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        align-items: center;
        color: white;
        text-align: center;
    }

    .hero-overlay {
        background: rgba(0, 0, 0, 0.5);
        padding: 100px 20px;
    }

    .about-section, .services-section, .testimonials-section, .gallery-section, .contact-section,
    .intro-section, .mission-section, .experience-section, .team-section, .contact-intro,
    .contact-form-section, .gallery-intro, .gallery-list, .services-intro, .services-list {
        background-color: var(--secondary-background);
        padding: 5rem 0;
        text-align: center;
    }

    .team-section, .gallery-page, .contact-page, .about-page {
        background-color: var(--secondary-background);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: 2.5rem;
        color: var(--complementary-accent);
    }

    p, .text-center {
        font-size: 1.1rem;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 20px;
        color: var(--text-color);
    }

    .gallery-image, .service-card img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .gallery-image:hover, .service-card img:hover {
        transform: scale(1.05);
    }

    .testimonial-card, .service-card, .gallery-item {
        margin-bottom: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        background-color: var(--secondary-background);
    }

    @media (max-width: 768px) {
        h1, h2, h3, h4, h5, h6 {
            font-size: 24px;
        }

        .about-section, .services-section, .testimonials-section, .gallery-section, .contact-section,
        .intro-section, .mission-section, .experience-section, .team-section, .contact-intro,
        .contact-form-section, .gallery-intro, .gallery-list, .services-intro, .services-list {
            padding: 3rem 1rem;
        }
    }
`;

export default GlobalStyles;








