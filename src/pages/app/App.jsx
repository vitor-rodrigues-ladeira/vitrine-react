import React, {useState} from 'react'
import styles from './App.module.css'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import CardList from '../../components/card-list/CardList.jsx'

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState([])

  const handleCheckBox = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    if (checked) {
      setSelectedFilter([...selectedFilter, value])
    } else {
      setSelectedFilter(selectedFilter.filter((item) => item !== value))
    }
  }
  console.log(selectedFilter)
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar selectedFilter={selectedFilter} handleCheckBox={handleCheckBox}/>
        <CardList selectedFilter={selectedFilter}/>
      </div>
      <Footer />
    </div>
  )
}