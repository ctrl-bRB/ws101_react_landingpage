import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <h2>WHAT IS WEB DEVELOPMENT?</h2>
                <p>
                    Web development is the process of creating and maintaining websites. It involves building the site’s structure, writing code, ensuring it works on different devices, adding interactive features, testing for errors, and keeping the site updated.
                </p>
                <h2>IMPORTANCE.</h2>
                <div className="importance-section">
                    <h3>Online Presence</h3>
                    <p>
                        Having a website helps people or businesses show who they are and what they do. It’s like having a digital home where people can visit to learn more about you.
                    </p>
                </div>
                <div className="importance-section">
                    <h3>Marketing and Sales</h3>
                    <p>
                        Websites are great for marketing and selling stuff. You can use them to show up in search engines, connect with social media, and even sell products directly to customers.
                    </p>
                </div>
                <div className="importance-section">
                    <h3>Adaptability</h3>
                    <p>
                        The internet is always changing, and a well-made website can easily be updated to stay current and keep up with new trends.
                    </p>
                </div>
                <div className="importance-section">
                    <h3>Accessibility</h3>
                    <p>
                        A website allows people from all over the world to access information, products, and services at any time.
                    </p>
                </div>
            </div>       
        </section>
    );
};

export default About;