import './App.scss'
import {Layout} from './components/Layout/layout'
import {Landing} from './components/Landing/landing'
import {About }from './components/About/about'
import { ProjectCard } from './components/Projects/projects'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<ProjectCard />} />
        </Route >
    </Routes>
    </>
  )
}

export default App
