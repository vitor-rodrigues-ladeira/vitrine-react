import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CardDetails.module.css'
import Header from '../../components/header/Header'

export default function CardDetails(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return(
        <div>
            <Header/>
            <button onClick={handleClick}>Voltar</button>
        </div>
    )
}