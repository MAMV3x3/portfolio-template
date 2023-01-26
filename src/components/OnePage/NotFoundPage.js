import React from 'react'
import Window3d from '../SubComponents/NotFoundWindow3d'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="NotFound">
        <div className='NotFound-asset'>
          <Window3d/>
        </div>
        <div className='NotFound-content'>
          <h1 className='NotFound-text'>Error 400</h1>
          <h1 className='NotFound-text'>Not Found</h1>
        </div>
    </div>
  )
}

export default NotFoundPage