import React from 'react'
import Window3d from '../SubComponents/Window3d'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="NotFound">
        <Window3d/>
        <h1 className='NotFoundText'>Not Found</h1>
    </div>
  )
}

export default NotFoundPage