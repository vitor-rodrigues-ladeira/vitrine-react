import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card({uuid, img, name, roleIcon, role}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/details?uuid=${uuid}`)
    }
    return (
        <div className={`${styles.cardBox} animation`}>
            <img src={img} alt="" className={styles.portrait}/>
            <div className={styles.row}>
                <p className={styles.name}>{name}</p>
                <ul className={styles.role}>
                    <img src={roleIcon} alt="" />
                    <span>{role}</span>
                </ul>
            </div>
            <button className={styles.btn} onClick={handleClick}>Detalhes</button>
        </div>
    )
}