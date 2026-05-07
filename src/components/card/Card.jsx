import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card({key, id, img, name, elixirCount, rarity }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/details?id=${id}`)
    }
    return (
        <div className={styles.cardBox} key={key}>
            <img src={img} alt="" />
            <p className={styles.name}>{name}</p>
            <ul className={styles.row}>
                <div className={styles.elixir}>
                    <img src="elixir.png" alt="" />
                    <div>{elixirCount}</div>
                </div>
                <span className={styles.rarity}>{rarity}</span>
            </ul>
            <button className={styles.btn} onClick={handleClick}>Veja mais</button>
        </div>
    )
}