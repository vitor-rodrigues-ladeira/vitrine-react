import React from 'react'
import styles from './App.module.css'
import Header from './components/header/Header.jsx'
import Card from './components/card/Card.jsx'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVhYWNhZWZhLTJjMzEtNGI0OC1hZTc3LThmZWY1NTNlODZmMiIsImlhdCI6MTc3Nzk5NjM3OSwic3ViIjoiZGV2ZWxvcGVyLzk3YjYwOTIwLTM4MzAtN2IwYi02M2QxLTA4MjQ5NTM0YzRhZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNjMuMTM0LjQyIiwiMTc3LjEzOS4yNDUuMTE2Il0sInR5cGUiOiJjbGllbnQifV19.3Ppf314m57pbNSXISQGVVPqBgjKOFF2DQD2nJxmlXCeNlrtpmGbcKMJwvxEmSTQyiLfb_9s6kB9S4mhYlRbeCg";

fetch('/api/cards/', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));

function App() {

  return (
    <div>
      <Header />
      <div className={styles.grid}>
        <Card img="https://cdns3.royaleapi.com/cdn-cgi/image/w=300,h=300,format=png/static/img/cards/v9-f09d5c9d/hog-rider.png" name="Hog Rider" elixirCount="4" rarity="Rare" />
      </div>
    </div>
  )
}

export default App