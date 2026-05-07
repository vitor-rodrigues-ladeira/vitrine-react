import React, { useEffect, useState } from 'react'
import styles from './CardList.module.css'
import Card from '../card/Card.jsx'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVhYWNhZWZhLTJjMzEtNGI0OC1hZTc3LThmZWY1NTNlODZmMiIsImlhdCI6MTc3Nzk5NjM3OSwic3ViIjoiZGV2ZWxvcGVyLzk3YjYwOTIwLTM4MzAtN2IwYi02M2QxLTA4MjQ5NTM0YzRhZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNjMuMTM0LjQyIiwiMTc3LjEzOS4yNDUuMTE2Il0sInR5cGUiOiJjbGllbnQifV19.3Ppf314m57pbNSXISQGVVPqBgjKOFF2DQD2nJxmlXCeNlrtpmGbcKMJwvxEmSTQyiLfb_9s6kB9S4mhYlRbeCg";


export default function CardList() {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const responseFetch = fetch('/api/cards/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data)
                        setContent(data)
                })

        } catch (error) {
            console.log('Erro na requisão', error)
        } finally {
            setLoading(false)
        }
    }, [])

    if (loading) {
        return (<p><strong>Carregando...</strong></p>)
    }

    if (content.length < 0 || !content?.items || content.items.lenght == 0) {
        return (<p><strong>Cartas não encontradas</strong></p>)
    }

    return (
        <div className={styles.grid}>
            {content.items.map((item, index) =>
                <Card
                    key={index}
                    img={item.iconUrls?.medium}
                    name={item.name}
                    elixirCount={item.elixirCost}
                    rarity={item.rarity}
                />
            )}
        </div>
    )
}