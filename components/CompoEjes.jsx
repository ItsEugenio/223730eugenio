"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/components.module.css'
export default function CompoEjes({ejes,ejeImg}) {
    const banner = ejeImg
  return (
    <article className={styles.contEjes}>
        
        <section> 
            {ejes.map((eje)=>(
            <ul key={eje}>
                <li> 
                <p className={styles.subEje}>{eje.eje}</p>
                </li>
            </ul>
            
        ))}
        </section>
        <section className={styles.ejeImg}>
        {banner.map((banner) => (
          <Image key={banner.id}
         src={banner.url}
         alt={banner.alt}
         width={banner.width}
         height={banner.height}
         
        />
      ))}
        </section>
    </article>
  )
}
