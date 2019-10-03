import React from 'react'
import './styles.css'

export const Card = ({ monster }) => (
  <div className='card-container'>
    <img 
      alt={monster.name}
      title={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h1>{monster.username}</h1>
    <p>{monster.email}</p>
  </div>
)