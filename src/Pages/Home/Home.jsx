import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Service from '../../Components/Service/Service';
import Projects from '../../Components/projects/projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Projects></Projects>
        </div>
    );
};

export default Home;