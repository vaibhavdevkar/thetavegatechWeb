import React from 'react'
import { Outlet } from 'react-router-dom'
// import Slides from './Component/Slides'

const Maincomp = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Maincomp