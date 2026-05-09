import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './CardDetails.module.css'
import Header from '../../components/header/Header'

export default function CardDetails() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [agent, setAgent] = useState(null)
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
        return (<p className='loading'><strong>Carregando...</strong></p>)
    }

    if (agent.length < 1 || !agent.data || agent.data.length === 0) {
        return (<p><strong>Agentes não encontrados</strong></p>)
    }
    console.log(agent.data)
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <div className={styles.col1}>
                    <button onClick={handleClick} className={styles.btn}>&larr; Voltar</button>
                    <img src={agent.data.fullPortrait} alt="" />
                </div>
                <div className={styles.col2}>
                    <div className={styles.row}>
                        <h1>{agent.data.displayName}</h1>
                        <ul className={styles.role}>
                            <img src={agent.data.role.displayIcon} alt="" />
                            <span>{agent.data.role.displayName}</span>
                        </ul>
                    </div>
                    <p className={styles.desc}>{agent.data.description}</p>
                    <h2>Habilidades</h2>
                    {agent.data?.abilities.map((item, index) => {
                        return (
                            <div className={styles.ability} key={index}>
                                <ul>
                                    <img src={item.displayIcon} alt="" />
                                    <p>{item.displayName}</p>
                                </ul>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}