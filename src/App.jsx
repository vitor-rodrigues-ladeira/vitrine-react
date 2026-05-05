import React from 'react'
import styles from './App.module.css'
import Header from './components/header/Header.jsx'
import Card from './components/card/Card.jsx'


function App() {

  return (
    <div>
      <Header/>
      <div className={styles.grid}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default App