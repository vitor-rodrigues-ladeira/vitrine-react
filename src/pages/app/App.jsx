import React from 'react'
import styles from './App.module.css'
import Header from '../../components/header/Header.jsx'
import CardList from '../../components/card-list/CardList.jsx'

export default function  App() {
  return (
    <div>
      <Header />
      <CardList />
    </div>
  )
}