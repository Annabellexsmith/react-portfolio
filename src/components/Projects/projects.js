import { projectData } from '../../data'
import './projects.scss'
import {Typewriter} from '../Landing/typewriter'
import Loader from 'react-loaders'

export const ProjectCard = () => {
  return (
    <>
      <div className="images-container portfolio-page">
        <h1>
          <Typewriter text="Portfolio" delay={100} />{' '}
        </h1>
        <div className="text-zone">
          <h2>
            I take pride in my ability to seamlessly integrate my expertise as
            an oncology nurse with my skills as a full-stack software engineer.
            Creating applications that can be translated to the real world.
          </h2>
          {projectData.map((port, idx) => (
            <div className="image-box" key={idx}>
              <img
                src={port.imageSrc}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn btn-demo"
                  onClick={() => window.open(port.demo)}
                >
                  Demo
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(port.source)}
                >
                  Source
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}
