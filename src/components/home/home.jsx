import React from 'react';
import './home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="home-content">
                <h1>WEB DEVELOPMENT</h1>
                <p>Resource dedicated to exploring why web development is important</p>
                <a href="#about" className="btn">Learn More</a>
            </div>
        </section>
    );
};

export default Home;