
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };
    return (
        <header className="header">
            <div className="logo">LA</div>
            <div className="hamburger" onclick="toggleMenu()">
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

function Hero() {
    return (
        <section className="hero">
            <div><img src="" alt="Image" /></div>
            <div className="hero-content">
                <h2>W3Lcome to mY Site3</h2>
                <p>hchb hb bhbxhdcb</p>
                <button className="btn">Book Now</button>
            </div>
        </section>
    )
}

function About() {
    return (
        <section id="About">
            <div>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem odit enim veniam temporibus
                    asperiores maxime et in. Unde, culpa. Laboriosam quam consequuntur perspiciatis corporis quia non alias
                    voluptate aliquam.</p>
            </div>
        </section>
    )
}

function Services() {
    return (

        <section id="Services">
            <h2 style="text-align: center;">Services</h2>
            <div className="card">
                <h2>Website Development</h2>
                <p>Interractive, TResponsive Websites</p>
            </div>
            <div className="card">
                <h2>App Dev</h2>
                <p>Interractive Mobile Apps</p>
            </div>
            <div className="card">
                <h2>UI/UX Design</h2>
                <p>Graphic design</p>
            </div>
        </section>
    )
}

function Contact() {
    return (
        <section id="Contact">
            <h2 style="text-align: center;">Contact</h2>
            <div className="card">
                <h2>Email<br /></h2>
            </div>
            <div className="card">
                <h2>Mobile Phone</h2>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <p>copyright 2025 | L Aesthetics</p>
        </footer>
    )
}
function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default App;



