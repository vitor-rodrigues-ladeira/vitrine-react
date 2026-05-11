import React from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h3>Filtro</h3>
            <form className={styles.form}>
                <hr />
                <div className={styles.roles}>
                    <span>Função</span>
                    <div className={styles.row}>
                        <input type="checkbox" name='role' value='iniciador' />
                        <label for='iniciador'>Iniciador</label>
                    </div>
                    <div className={styles.row}>
                        <input type="checkbox" name='role' value='duelista' />
                        <label for='duelista'>Duelista</label>
                    </div>
                    <div className={styles.row}>
                        <input type="checkbox" name='role' value='sentinela' />
                        <label for='sentinela'>Sentinela</label>
                    </div>
                    <div className={styles.row}>
                        <input type="checkbox" name='role' value='controlador' />
                        <label for='controlador'>Controlador</label>
                    </div>
                </div>
                <hr />
                <div className={styles.row}>
                    <input type="checkbox" name='test' value='test' />
                    <label for='test'>Disponível para teste</label>
                </div>
            </form>
        </aside>
    )
}