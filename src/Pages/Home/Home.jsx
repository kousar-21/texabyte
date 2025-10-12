import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Service from '../../Components/Service/Service';
import Projects from '../../Components/projects/projects';
import BootCamps from '../../Components/Bootcamps/Bootcamps';
import Review from '../../Components/Review/Review';
import Question from '../../Components/Question/Question';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <BootCamps></BootCamps>
            <Review></Review>
            <Question></Question>
            
        </div>
    );
};

export default Home;