"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/components.module.css'
export default function Card({imgCard}) {
  
  return (
    <> 
        <section className={styles.conteCard}> 
     {imgCard.map((card) =>(
        <div key={card.alt} className={styles.card}> 
            <div> 
            <Image 
                src={card.url}
                alt={card.alt}
                width={card.width}
                height={card.height}
            />
            </div>
            <div>
                <h3 className={styles.titCard}>{card.tituloC}</h3>
            </div>
            <div>
                <p className={styles.subCard}>{card.subC}</p>
            </div>
            <div className={styles.linkCard}>
                <a href={card.link} className={styles.linkA}> 
                {card.textLink}
                </a>
             
            </div>
        </div>
     ))}
      </section>
    </>
  )
}
