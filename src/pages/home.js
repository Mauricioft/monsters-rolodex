import React, { useState, useEffect } from 'react'
import './styles.css'
import { CardList } from '../components/card-list'
import { SearchBox } from '../components/search-box'
import Api from '../services'

const Home = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const fetchData = async () => {
    const response = await Api.getList()
    setMonsters(response)
  }
  const handlerChange = (evt) => setSearchField(evt.target.value)
  const filteredMonsters = monsters.filter((monster) => 
    monster.username.toLowerCase().includes(searchField.toLowerCase()) || 
    monster.email.toLowerCase().includes(searchField.toLowerCase())
  )
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handlerChange={handlerChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default Home