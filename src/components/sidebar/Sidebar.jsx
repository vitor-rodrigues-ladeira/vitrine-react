import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const paramsFilter = [
    {
        "value": "role",
        "name": "Iniciador"
    },
    {
        "value": "role",
        "name": "Controlador"
    },
    {
        "value": "role",
        "name": "Duelista"
    },
    {
        "value": "role",
        "name": "Sentinela"
    },
    {
        "value": "facing-right",
        "name": "Virado para a direita"
    },
    {
        "value": "test",
        "name": "Disponível para teste"
    },
    {
        "value": "playable",
        "name": "Personagem jogável"
    }
]

export default function Sidebar() {
    const [selectedFilter, setSelectedFilter] = useState([])
    //const [isChecked, setIsChecked] = useState(false)
    // const checkHandler = () => {
    //     setIsChecked(!isChecked)
    // }
    // console.log(isChecked)

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
                    {paramsFilter.filter(item => item.value === 'role').map((item, index) => (
                        <div className={styles.row} key={index}>
                            <input
                                type="checkbox"
                                id={item.name}
                                name='role'
                                value={item.name}
                                //checked={isChecked}
                                onChange={handleCheckBox}
                            />
                            <label htmlFor={item.name}>{item.name}</label>
                        </div>
                    ))
                    }
                </div>
                <hr />
                <div className={styles.filters}>
                    {paramsFilter.filter(item => item.value !== 'role').map((item, index) => (
                        <div className={styles.row} key={index}>
                            <input
                                type="checkbox"
                                id={item.name}
                                name={item.name.toLowerCase()}
                                value={item.name}
                                onChange={handleCheckBox}
                            />
                            <label htmlFor={item.name}>{item.name}</label>
                        </div>
                    ))
                    }
                </div>
            </form>
        </aside>
    )
}