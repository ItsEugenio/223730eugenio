import React from 'react'
import CompoImg from './CompoImg'
import styles from '../styles/components.module.css'
export default function InfoHome({titHome,imgHome}) {
 const banner = imgHome;
  return (
    <>
        <article className={styles.contInfo}>
          <section>
          <h1 className={styles.bantit}>{titHome}</h1>
          </section>
        <section>
        <CompoImg banner={banner}/>
        </section>
        </article>
    </>
  )
}
