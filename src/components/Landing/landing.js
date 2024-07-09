import { Link } from "react-router-dom";
import './landing.scss'
import Typewriter from './typewriter';


const Landing = () => {
    const name = "Annabelle";
    const greeting = `Hello, I'm `;

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    {greeting} 
                   <Typewriter text={name} delay={60} /> </h1>
              
                <br />
                <h2> Full-Stack Software Engineer | Oncology Nurse | Fiber Arts Enthusiast </h2>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>
        </div>
    );
};


export default Landing