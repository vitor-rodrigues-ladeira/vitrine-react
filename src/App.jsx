import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from './components/header/Header.jsx'
import Card from './components/card/Card.jsx'
import CardList from './components/card-list/CardList.jsx'


function App() {
  // const callGet = getCards()
  // console.log("log da funcao", callGet.items)
  return (
    <div>
      <Header />
      <div className={styles.grid}>
        {/* {data == null || data == undefined ? console.log("erro") : data.items.map((item) =>
        <Card
          key = {item.id}
          img={item.iconUrls.medium}
          name={item.name}
          elixirCount={item.elixirCost}
          rarity={item.rarity}
        />
        )} */}
        <CardList/>
      </div>
    </div>
  )
}

export default App