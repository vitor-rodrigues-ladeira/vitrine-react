import React from 'react';
import styles from './Card.module.css'

export default function Card(){
    return(
        <div className={styles.cardBox}>
            <img src="card.webp" alt="" />
            <p>Nome</p>
            <ul className={styles.row}>
                <img src="elixir.jpg" alt="" />
                <span>Raridade</span>       
            </ul>
        </div>
    )
}