import { Link, NavLink } from 'react-router-dom'
import './navbar.scss'
import A from "../../assets/images/A.svg"
import {  faGithub, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFile} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () =>  (
 <div className='nav-bar'>
   <Link className='logo' to="/">
      <img src={A} alt="Letter A with Annabelle underneath. The A is decorated with a leaves"/>
   </Link>
 <nav>
   <NavLink
      exact="true" 
      activeclassname="active" 
      to="/"
   >
      <FontAwesomeIcon  className='icon' icon={faHome} color="#FBFCF8" />
   </NavLink>
   <NavLink 
      exact="true"
      activeclassname="active"
      className="about-link" 
      to="/about"
   >
      <FontAwesomeIcon className='icon' icon={faUser} color="#FBFCF8" />
   </NavLink> 
   <NavLink 
      exact="true" 
      activeclassname="active" 
      className="contact-link" 
      to="/contact"
      >
      <FontAwesomeIcon className='icon' icon={faEnvelope} color="#FBFCF8" />
   </NavLink>
   <NavLink 
      exact="true" 
      activeclassname="active" 
      className="linkedin-link" 
      to="https://www.linkedin.com/in/annabelle-smith/"
      >
      <FontAwesomeIcon className='icon' icon={faLinkedinIn} color="#FBFCF8" />
   </NavLink>
   <NavLink 
      exact="true" 
      activeclassname="active" 
      className="github-link" 
      to="https://github.com/Annabellexsmith"
      >
      <FontAwesomeIcon className='icon' icon={faGithub} color="#FBFCF8" />
   </NavLink>
   <NavLink 
      exact="true" 
      activeclassname="active" 
      className="resume-link" 
      to="/"
      >
      <FontAwesomeIcon className='icon' icon={faFile} color="#FBFCF8" />
   </NavLink>
 </nav>
 </div>

)

export default Sidebar