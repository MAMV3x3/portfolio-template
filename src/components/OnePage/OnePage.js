import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Resume from '../resume/Resume'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

import { Dna } from 'react-loader-spinner'

function OnePage() {
  let data = require('../../Data/developerInfo.json')
  let developer = data.developer
  let resume = data.resume
  let portfolio = data.portfolio

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="loader">
          <Dna
          visible={true}
          height="90"
          width="90"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
        <Sidebar />
        <main className="main">
          <Home devName={developer.name} devCarrer={developer.career} devSocialMedia = {developer.socialMedia} proyects={portfolio}/>
          <About history={developer.about.history} statistics={developer.about.statistics}/>
          <Resume education={resume.education} experience={resume.experience}/>
          <Portfolio proyects={portfolio}/>
          <Contact />
        </main>
        </>
      )}
    </div>
  )
}
export default OnePage
