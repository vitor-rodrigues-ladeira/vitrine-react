import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './CardDetails.module.css'
import Header from '../../components/header/Header'

export default function CardDetails() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
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
                </div>
                <div className={styles.col2}>
                    <h1>{id}</h1>
                </div>
            </div>
        </div>
    )
}