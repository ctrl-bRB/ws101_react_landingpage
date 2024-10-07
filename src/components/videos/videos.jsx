import React from 'react';
import './videos.css';

const Videos = () => {
    return (
        <section id="images">
            <div className="images-content">
                <h2>Learn More with These Videos</h2>
                <div className="image-container">
                    <a href="https://youtu.be/FQdaUv95mR8?si=Ba97mduTuWfI4QpN" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/image2.jpg`} alt="Video 1" width="320" height="240" />
                    </a>
                    <a href="https://youtu.be/xGmIl7QbBiA?si=k_SNy6r6hJdP9Wp0" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/image1.jpg`} alt="Video 2" width="320" height="240" />
                    </a>
                    <a href="https://youtu.be/PkZNo7MFNFg?si=PtGpqfSMT_R7zfT_" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/image3.jpg`} alt="Video 3" width="320" height="240" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Videos;