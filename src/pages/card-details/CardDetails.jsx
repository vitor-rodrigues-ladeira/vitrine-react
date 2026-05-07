import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CardDetails.module.css'
import Header from '../../components/header/Header'

export default function CardDetails() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <div className={styles.col1}>
                    <button onClick={handleClick}>Voltar</button>
                    <img src="" alt="" />
                    <div className={styles.sku}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={styles.col2}>
                    <h1>Nome</h1>
                    <div>
                        <img src="elixir.png" alt="" />
                        <div>0</div>
                    </div>
                    <div className={styles.maxLevels}>
                        <span>MaxLevel</span>
                        <span>MaxEvolutionLevel</span>
                    </div>
                </div>
            </div>
        </div>
    )
}