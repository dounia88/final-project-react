import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#f8f8f8',
            padding: '60px 0 20px',
            color: '#666'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '30px',
            marginBottom: '40px'
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        heading: {
            color: '#333',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '10px'
        },
        text: {
            lineHeight: '1.6',
            color: '#666',
            fontSize: '14px'
        },
        link: {
            color: '#666',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.3s ease',
            cursor: 'pointer'
        },
        socialIcons: {
            display: 'flex',
            gap: '15px',
            marginTop: '15px'
        },
        socialIcon: {
            color: '#666',
            textDecoration: 'none',
            fontSize: '18px',
            transition: 'color 0.3s ease'
        },
        inputContainer: {
            display: 'flex',
            gap: '10px',
            marginTop: '15px'
        },
        input: {
            padding: '10px 15px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            flex: '1',
            fontSize: '14px'
        },
        button: {
            padding: '10px 25px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        copyright: {
            textAlign: 'center',
            borderTop: '1px solid #ddd',
            paddingTop: '20px',
            fontSize: '14px',
            color: '#666'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.gridContainer}>
                    
                    <div style={styles.section}>
                        <h3 style={styles.heading}>GET IN TOUCH</h3>
                        <p style={styles.text}>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St,
                            New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div style={styles.socialIcons}>
                            <a href="#" style={styles.socialIcon} onMouseOver={(e) => e.target.style.color = '#3b5998'} onMouseOut={(e) => e.target.style.color = '#666'}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" style={styles.socialIcon} onMouseOver={(e) => e.target.style.color = '#1da1f2'} onMouseOut={(e) => e.target.style.color = '#666'}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" style={styles.socialIcon} onMouseOver={(e) => e.target.style.color = '#bd081c'} onMouseOut={(e) => e.target.style.color = '#666'}>
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#" style={styles.socialIcon} onMouseOver={(e) => e.target.style.color = '#db4437'} onMouseOut={(e) => e.target.style.color = '#666'}>
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" style={styles.socialIcon} onMouseOver={(e) => e.target.style.color = '#e4405f'} onMouseOut={(e) => e.target.style.color = '#666'}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    
                    <div style={styles.section}>
                        <h3 style={styles.heading}>CATEGORIES</h3>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Men</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Women</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Dresses</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Sunglasses</a>
                    </div>

                    
                    <div style={styles.section}>
                        <h3 style={styles.heading}>LINKS</h3>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Search</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>About Us</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Contact Us</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Returns</a>
                    </div>

                    
                    <div style={styles.section}>
                        <h3 style={styles.heading}>HELP</h3>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Track Order</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Returns</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>Shipping</a>
                        <a href="#" style={styles.link} onMouseOver={(e) => e.target.style.color = '#333'} onMouseOut={(e) => e.target.style.color = '#666'}>FAQs</a>
                    </div>

                    
                    <div style={styles.section}>
                        <h3 style={styles.heading}>NEWSLETTER</h3>
                        <div style={styles.inputContainer}>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                style={styles.input}
                            />
                            <button 
                                style={styles.button}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                
                <div style={styles.copyright}>
                    Copyright Â© 2022 Shopify Theme Developed by MassTechnologist All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;