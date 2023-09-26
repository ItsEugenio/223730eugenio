import React from 'react'
import styles from '../styles/components.module.css'
export default function Subtitulo({banner}) {
  return (
    <>
      {banner.map((cont) => (
        <p className={styles.subtitulo} key={cont.id}>{cont.Subtitulo}</p>
      ))}
    </>
  )
}
