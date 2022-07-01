import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetail from '../pages/UserDetail'
import Users from '../pages/Users'

function Content() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<Users />}>
            <Route path='id/:id' element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Content
