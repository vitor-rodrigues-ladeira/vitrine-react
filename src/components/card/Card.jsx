import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card({ key, id, img, name, roleIcon, role}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/details?id=${id}`)
    }
    return (
        <div className={styles.cardBox} key={key}>
            <img src={img} alt="" />
            <div>
                <p className={styles.name}>{name}</p>
                <ul className={styles.role}>
                    <img src={roleIcon} alt="" />
                    <span>{role}</span>
                </ul>
            </div>
            <button className={styles.btn} onClick={handleClick}>Veja mais</button>
        </div>
    )
}