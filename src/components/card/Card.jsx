import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.cardBox}>
            <img src={props.img} alt="" />
            <p>{props.name}</p>
            <ul className={styles.row}>
                <div className={styles.elixir}>
                    <img src="elixir.png" alt="" />
                    <div>{props.elixirCount}</div>
                </div>
                <span className={styles.rarity}>{props.rarity}</span>
            </ul>
            <button className={styles.btn}>Veja mais</button>
        </div>
    )
}