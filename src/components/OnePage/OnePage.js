import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Resume from '../resume/Resume'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

function OnePage() {
  let data = require('../../Data/developerInfo.json')
  let developer = data.developer
  let resume = data.resume
  let portfolio = data.portfolio
  return (
    <div>
      <>
        <Sidebar />
        <main className="main">
          <Home devName={developer.name} devCarrer={developer.career} devSocialMedia = {developer.socialMedia} />
          <About history={developer.about.history} statistics={developer.about.statistics}/>
          <Resume education={resume.education} experience={resume.experience}/>
          <Portfolio proyects={portfolio}/>
          <Contact />
        </main>
      </>
    </div>
  )
}
export default OnePage
