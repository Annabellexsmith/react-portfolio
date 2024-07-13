import './about.scss'
import selfieImg from '../../assets/images/selfie.png'
import Loader from 'react-loaders'
export const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1> About Me</h1>
          <p>
            As a Full-Stack Software Engineer, I leverage engineering and
            healthcare proficiency to optimize user experiences. My oncology
            nursing background has honed my ability to thrive under pressure,
            think critically, and solve complex problems. I excel in driving
            business outcomes through cross-department collaboration, with
            strong analytical skills, adaptability, and a passion to innovate
            healthcare technology. I bring a unique perspective that blends
            clinical proficiency with technical acumen.
          </p>
          <p>
            My diverse background positions me to bridge the gap between medical
            needs and technological solutions, striving to enhance healthcare
            delivery through thoughtful and impactful innovation. With a strong
            ability to adapt quickly to new environments, maintain clear
            communication, and think critically, I am well-equipped to tackle
            complex challenges and drive meaningful progress.
          </p>
          <p>
            I am open to new opportunities and would love to discuss how my
            unique skill set can contribute to your team.
          </p>
        </div>
        <img
          src={selfieImg}
          alt="A selfie of Annabelle smiling"
          className="selfie"
        />
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}
