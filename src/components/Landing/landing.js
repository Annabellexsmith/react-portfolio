import { Link } from "react-router-dom";
import './landing.scss'
import Typewriter from './typewriter';
import Loader from 'react-loaders';


const Landing = () => {
    const name = "Hello, I'm Annabelle";

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                   <Typewriter text={name} delay={200} /> </h1>
                <br />
                <h2> Full-Stack Software Engineer | Oncology Nurse | Fiber Arts Enthusiast </h2>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>
        </div>
        <Loader type='ball-spin-fade-loader' />
        </>
    );
};


export default Landing