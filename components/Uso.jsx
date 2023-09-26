import React from 'react'
import Presentacion from './Presentacion'
export default function Uso({titUso,subUso}) {
    const titPre = titUso
    const subPre = subUso
  return (
    <article>
        <Presentacion titPre={titPre} subPre={subPre}/>
    </article>
  )
}
