import React from 'react'
import './styles.css'

export const SearchBox = ({ handlerChange }) => (
  <input
    type='search'
    className='search'
    placeholder='Search...'
    onChange={handlerChange}
  />
)