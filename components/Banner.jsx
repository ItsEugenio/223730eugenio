import React from 'react'
import CompoImg from './CompoImg'
import styles from '../styles/components.module.css'
export default function Banner({banner,titBan,subBan}) {
  return (
  
    <article className={styles.banner}>
        <section>
            <h1 className={styles.bantit}>{titBan}</h1>
            <p className={styles.subtext}>{subBan}</p>
        </section>
        <section className={styles.imgBanner}>
        <CompoImg banner={banner}/>
        </section>
    </article>
  )
}
