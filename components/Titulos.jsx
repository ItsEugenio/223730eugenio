import React from 'react'

export default function Titulos({banner}) {
  return (
   <>
        {banner.map((conte) =>(
        <h1 key={conte.id}>{conte.Titulo} </h1>
      )

      )}
   </>
  )
}
