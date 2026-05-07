import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from '../../components/header/Header.jsx'
import Card from '../../components/card/Card.jsx'
import CardList from '../../components/card-list/CardList.jsx'

function App() {
  // const callGet = getCards()
  // console.log("log da funcao", callGet.items)
  return (
    <div>
      <Header />
      <CardList />
    </div>
  )
}

export default App