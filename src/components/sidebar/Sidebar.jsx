import React from 'react'
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
                                name='role'
                                value={item.name}
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