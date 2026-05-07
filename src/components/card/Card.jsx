import React from 'react';
import styles from './Card.module.css'

export default function Card({img, name, elixirCount, rarity}) {
    return (
        <div className={styles.cardBox}>
            <img src={img} alt="" />
            <p className={styles.name}>{name}</p>
            <ul className={styles.row}>
                <div className={styles.elixir}>
                    <img src="elixir.png" alt="" />
                    <div>{elixirCount}</div>
                </div>
                <span className={styles.rarity}>{rarity}</span>
            </ul>
            <button className={styles.btn}>Veja mais</button>
        </div>
    )
}