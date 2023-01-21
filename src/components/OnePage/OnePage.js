import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Home from '../home/Home'
import About from '../about/About'
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
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </>
    </div>
  )
}
export default OnePage
