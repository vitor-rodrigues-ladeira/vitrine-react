import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <h2 className={styles.text}>Vitor Paes Rodrigues - <a href="https://github.com/vitor-rodrigues-ladeira/" target='__blanck'>@vitor-rodrigues-ladeira</a></h2>
        </footer>
    )
}