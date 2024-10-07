import React, { useEffect } from 'react';
import './header.css';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <a href="#" className="logo">
                <img src={`${process.env.PUBLIC_URL}/web_logo.png`} alt="Logo" />
            </a>
            <ul className="menulist">
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#images">Videos</a></li>
            </ul>
        </header>
    );
};

export default Header;