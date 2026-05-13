import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const paramsFilter = [
    {
        "field": "role",
        "value": ["Iniciador", "Controlador", "Duelista", "Sentinela"],
    },
    {
        "field": "isFullPortraitRightFacing",
        "value": [],
        "name": "Virado para direita"
    },
    {
        "field": "isAvailableForTest",
        "value": [],
        "name": "Disponível para teste"
    },
    {
        "field": "isPlayableCharacter",
        "value": [],
        "name": "Personagem jogável"
    }
]

export default function Sidebar() {
    const [selectedFilter, setSelectedFilter] = useState([])

    const handleCheckBox = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        if (checked) {
            setSelectedFilter([...selectedFilter, value])
        } else {
            setSelectedFilter(selectedFilter.filter((item) => item !== value))
        }
    }

    console.log(selectedFilter)
    return (
        <aside className={styles.sidebar}>
            <h3>Filtro</h3>
            <form className={styles.form}>
                <hr />
                <div className={styles.roles}>
                    <span>Função</span>
                    {paramsFilter.map((item) => (
                        item.field === 'role' && (
                            item.value.map((i, idx) =>
                                <div className={styles.row} key={idx}>
                                    <input
                                        type="checkbox"
                                        id={i}
                                        name="role"
                                        value={i}
                                        onChange={handleCheckBox}
                                    />
                                    <label htmlFor={i}>{i}</label>
                                </div>
                            )
                        )
                    ))}
                </div>
                <hr />
                {paramsFilter.map((item, index) =>
                    item.name && (
                        <div className={styles.row} key={index}>
                            <input
                                type="checkbox"
                                id={item.field}
                                name={item.field.toLowerCase()}
                                value={item.field}
                                onChange={handleCheckBox}
                            />
                            <label htmlFor={item.field}>{item.name}</label>
                        </div>
                    )
                )}
            </form>
        </aside>
    )
}