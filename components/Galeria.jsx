"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/components.module.css'

export default function Galeria({galeria}) {
  return (
    <article className={styles.galeria}>
          {galeria.map((galeria) => (
           <section className={styles.galeriaCard} key={galeria}>
         
            <h1 key={galeria}>{galeria.Titulo}</h1>
          <Image 
         src={galeria.url}
         alt={galeria.alt}
         width={galeria.width}
         height={galeria.height}
        />
    
    </section>
      ))}
    </article>
 
  );
}
