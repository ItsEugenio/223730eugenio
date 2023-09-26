import React from 'react'
import styles from '../styles/components.module.css'
export default function Presentacion({titPre, subPre}) {
  return (
    <section className={styles.prese}>
        <h2 className={styles.bantit}>{titPre}</h2>
        <p className={styles.subtext}>{subPre}</p>
    </section>
  )
}
