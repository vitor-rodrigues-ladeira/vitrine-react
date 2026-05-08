import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './CardDetails.module.css'
import Header from '../../components/header/Header'

export default function CardDetails() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [agent, setAgent] = useState([])
    const id = searchParams.get('id')

    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        try {
            const responseFetch = fetch(`https://valorant-api.com/v1/agents/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then((response) => response.json())
                .then((data) => {
                    setAgent(data)
                    setLoading(false)
                    console.log(data)
                })
                
        } catch (error) {
            console.log('Erro na requisição:', error)
            setLoading(false)
        }
    }, [])

    if (loading) {
        return (<p><strong>Carregando...</strong></p>)
    }

    if(agent.length < 1 || !agent.data || agent.data.length === 0){
        return(<p><strong>Agentes não encontrados</strong></p>)
    }

    return (
        <div>
            <Header />
            <div className={styles.content}>
                <div className={styles.col1}>
                    <button onClick={handleClick}>Voltar</button>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className={styles.col2}>
                    <h1>{id}</h1>
                </div>
            </div>
        </div>
    )
}