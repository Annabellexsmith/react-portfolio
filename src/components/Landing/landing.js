
import './landing.scss'
import {Typewriter} from './typewriter'
import Loader from 'react-loaders'

export const Landing = () => {
  const name = "Hello, I'm Annabelle"

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <Typewriter text={name} delay={100} />{' '}
          </h1>
          <br />
          <h2>
            {' '}
            Full-Stack Software Engineer | Oncology Nurse | Fiber Arts
            Enthusiast{' '}
          </h2>
       <a href="mailto:sannabelle056@gmail.com?subject=New Opportunity!" className='flat-button'>Email Me!</a>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}
