import React from "react";
import styles from '../styles/components.module.css'
export default function Navbar({ links }) {
  return (
    <>
      {links.map((link) => (
        <nav key={link.id}>
            <a href={link.url} className={styles.linknav}>
              {link.text}
            
            </a>
        </nav>
      ))}
    </>
  );
}
