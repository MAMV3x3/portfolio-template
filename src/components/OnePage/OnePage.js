import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Services from '../services/Services'
import Resume from '../resume/Resume'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

function OnePage() {
  return (
    <div>
      <>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </>
    </div>
  )
}
export default OnePage
