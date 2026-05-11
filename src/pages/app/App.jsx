import React from 'react'
import styles from './App.module.css'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import CardList from '../../components/card-list/CardList.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <CardList />
      </div>
      <Footer />
    </div>
  )
}