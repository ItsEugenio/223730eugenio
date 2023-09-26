import React from 'react'
import Presentacion from './Presentacion'
export default function Definicion({titDef,subDef}) {
    const titPre = titDef
    const subPre = subDef
  return (
    <article> 
    <Presentacion  titPre={titPre} subPre={subPre}/> 
    </article>
  )
}
