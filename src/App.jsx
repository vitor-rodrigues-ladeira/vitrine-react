import React from 'react'
import styles from './App.module.css'
import Header from './components/header/Header.jsx'
import Card from './components/card/Card.jsx'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVhYWNhZWZhLTJjMzEtNGI0OC1hZTc3LThmZWY1NTNlODZmMiIsImlhdCI6MTc3Nzk5NjM3OSwic3ViIjoiZGV2ZWxvcGVyLzk3YjYwOTIwLTM4MzAtN2IwYi02M2QxLTA4MjQ5NTM0YzRhZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNjMuMTM0LjQyIiwiMTc3LjEzOS4yNDUuMTE2Il0sInR5cGUiOiJjbGllbnQifV19.3Ppf314m57pbNSXISQGVVPqBgjKOFF2DQD2nJxmlXCeNlrtpmGbcKMJwvxEmSTQyiLfb_9s6kB9S4mhYlRbeCg";

async function getCards() {
  const response = await fetch('/api/cards/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log("log do data",data)
  return data
  // .then(response => response.json())
  // .then(data => console.log(data));
}
const callGet = await getCards()
console.log("log da funcao",callGet.items)

function App() {

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
      </div>
    </div>
  )
}

export default App