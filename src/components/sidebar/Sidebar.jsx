import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const paramsFilter = [
    {
        "field": "role",
        "value": ["Iniciador", "Controlador", "Duelista", "Sentinela"],
        "name": "Função"
    },
    {
        "field": "isFullPortraitRightFacing",
        "value": [true],
        "name": "Virado para direita"
    },
    {
        "field": "isAvailableForTest",
        "value": [true],
        "name": "Disponível para teste"
    },
    {
        "field": "isPlayableCharacter",
        "value": [true],
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

                {paramsFilter.map((item, index) => (
                    <div key={index} data-field={item.field} className={styles.roles} style={{borderBottom: '1px solid'}}>
                        <span>{item.value.length > 1 ? item.name : ''}</span>
                        {item.value.map((i, idx) =>
                            <div className={styles.row} key={idx}>
                                <input
                                    type="checkbox"
                                    id={`${item.field}::${i}`}
                                    name={item.field}
                                    value={`${item.field}::${i}`}
                                    onChange={handleCheckBox}
                                />
                                <label htmlFor={`${item.field}::${i}`}>
                                    {item.value.length > 1 ? i : item.name}
                                </label>
                            </div>
                        )}
                    </div>
                ))}
            </form>
        </aside>
    )
}