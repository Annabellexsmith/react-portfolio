import './App.scss'
import Layout from './components/Layout/layout'
import Landing from './components/Landing/landing'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route >
    </Routes>
    </>
  )
}

export default App
