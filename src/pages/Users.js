import React, { useEffect, useState } from 'react'
import { Link, useOutlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../stores/site'
import User from '../components/User'

function Users() {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.site)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.ok && res.status == 200) {
          return res.json()
        }
      })
      .then(data => dispatch(setUsers(data.map(user => { user['vote'] = 0; return user; }))))
      .catch(err => console.log(err))
  }, [])


  const sortedUsers = users.slice().sort((a,b) => b.vote - a.vote)

  const childComponent = useOutlet();

  if (childComponent) {
    return childComponent
  }

  return (
   
    <ul className='userList'>
      {sortedUsers && sortedUsers.map(user => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default Users
