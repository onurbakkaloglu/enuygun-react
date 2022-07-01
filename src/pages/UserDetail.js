import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../stores/site'

function UserDetail() {

  const dispatch = useDispatch()
  const { post} = useSelector(state => state.site)

  const {id} = useParams()
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      if (res.ok && res.status == 200) {
        return res.json()
      }
    })
    .then(data => dispatch(setPosts(data))) 
  }, [id])

  if(!post){
    return 'Yükleniyor..'
  }

  return (
    <>
    <div className='detailCard'>
      <div className='detailCardHeader'></div>
      <div className='detailAvatarParent'>
      <div className='detailAvatar'>
        <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' className='detailAvatarImage' />
      </div>
      </div>
      <div className='detailName'>
      <h1>{post.name}</h1>
      </div>
      <div className='detailContact'>
        <p><p>{post.phone}</p></p>
        <p><p>{post.email}</p></p>
      </div>
      <div className='detailDescriptions'>
      <p><b>Adres: </b>{post.address.city}, {post.address.street}</p>
      </div>
      <div className='detailDescriptions'>
      <p><b>Web Site: </b>{post.website}</p>
      </div>
      <div className='detailDescriptions'>
      <p><b>Şirket: </b>{post.company.name}</p>
      </div>
    </div>
      
      
      
    
    </>
  )
}

export default UserDetail
