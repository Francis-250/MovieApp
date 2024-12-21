import React from 'react'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Latest from './Pages/Latest'
import UpCom from './Pages/UpCom'
import Recom from './Pages/Recom'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Latest />
      <UpCom />
      <Recom />
      <Footer />
    </div>
  )
}

export default App