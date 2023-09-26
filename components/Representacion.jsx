import React from 'react'
import Presentacion from './Presentacion'
import CompoImg from './CompoImg'
import styles from '../styles/components.module.css'
export default function Representacion({titDefR,subDefR,repreImg}) {
    const titPre = titDefR
    const subPre = subDefR
    const banner = repreImg
  return (
    <article className={styles.contRepre}>
        <Presentacion titPre={titPre} subPre={subPre}/>
        <section>
            <CompoImg  banner={banner}/>
        </section>
    </article>
  )
}
