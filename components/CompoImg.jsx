"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/components.module.css'
export default function CompoImg({ banner }) {
  return (
    <>
       {banner.map((banner) => (
          <Image key={banner.id}
         src={banner.url}
         alt={banner.alt}
         width={banner.width}
         height={banner.height}
         className={styles.bannerCard}
        />
      ))}

    

    </>
  )
}
