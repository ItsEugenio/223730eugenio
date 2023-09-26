import React from 'react'
import Card from './Card'
import styles from '../styles/components.module.css'
export default function ContenidoP({imgCard}) {
  return (
    <article className={styles.contenidoP}>
        <section>
          <h1 className={styles.titPre}>Contenido</h1>
        </section>
        <Card imgCard={imgCard}/>
    </article>
  )
}
