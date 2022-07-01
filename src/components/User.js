import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setUser } from '../stores/site'



function User( {user}) {

    const dispatch = useDispatch()

    const addVote = () => {
        dispatch(setUser(
          {...user,vote: user.vote+1}
        ))
      }



  return (
    <>
     <div className='card' >
      <div className='cardAvatar'><img className='avatarImage' src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' /></div>
      <div className='cardDetail'>
        <div className='cardDetailTop'>
          <Link to={`/users/id/${user.id}`}>
          {user.name}
          </Link>
          <span className='vote'>Oy Sayısı: {user.vote}</span>
          </div>
        <div className='cardDetailBottom'>
        <Link to={`/users/id/${user.id}`}>
        <button className='detailButton'>Detay</button> 
          </Link>
        <button className='voteButton' onClick={() => addVote()} id={user.id}>Oy Ver</button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default User
