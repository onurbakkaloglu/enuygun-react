import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
   

  return (
    <div className='sidebar'>
      <h1>Ayın Çalışanı</h1>
      <Link to={`/`}>
      <div className='sidebarButton'>
        Anasayfa
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
