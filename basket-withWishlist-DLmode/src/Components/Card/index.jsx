import React from 'react'
import './index.scss'
import Posts from '../Posts'

const Card = ({id,description,name,image}) => {
  const [data,getProducts]=Posts([])
  return (
    <>
    <div className='card'>
      {data && data.map((item)=>(
        <ul key={item.id}>
          <li><img src={item.image} alt="" /></li>
          <li>{item.id}</li>
          <li>{item.description}</li>
          <li>{item.name}</li>
        </ul>
      ))}
      </div>
    </>
  )
      }

export default Card
