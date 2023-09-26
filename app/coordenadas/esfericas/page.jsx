import React from 'react'
import InfoHome from '@/components/InfoHome'
import Definicion from '@/components/Definicion';
import CompoEjes from '@/components/CompoEjes';
import Representacion from '@/components/Representacion';
import Uso from '@/components/Uso';
import styles from '../../../styles/home.module.css'
export default function page() {
    const titHome =  'Coordendas Esféricas';
    const imgHome =[
        { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coordenadas_esf%C3%A9ricas_figura.svg/800px-Coordenadas_esf%C3%A9ricas_figura.svg.png', alt:'img', width:'400',height:'400' , tituloHome:'aaaa' }
      ];
    const titDef = 'Definicion :'
    const subDef = 'El sistema de coordenadas esféricas se utiliza para describir la posición de puntos en el espacio tridimensional en función de su distancia radial desde un origen y dos ángulos. Este es un sistema para describir espacios euclidianos tridimensionales.'
    
    const ejes =[
        {eje:'"r" es la distancia (en R3) desde origen hasta el punto.'},
        {eje:'"θ" es el ángulo que forma la parte positiva del eje X con la recta proyectada en el plano XY.'},
        {eje:'"φ" es el ángulo que hay entre la parte positiva del eje Z con la recta r.'},
      ];
      const ejeImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://es-academic.com/pictures/eswiki/67/Coordenadas_esf%C3%A9ricas_figura.svg', alt:'img', width:'250',height:'250' , tituloHome:'aaaa' },
    
      ];
      const titDefR = 'Representación '
      const subDefR = 'Un punto en coordenadas esféricas se describe como (r, θ, φ). La posición del punto se interpreta como la distancia desde el origen, el ángulo polar con respecto al eje Z y el ángulo azimutal en el plano XY.'
      const repreImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Spherical_coordinate_elements.svg/1200px-Spherical_coordinate_elements.svg.png', alt:'img', width:'500',height:'400' , tituloHome:'aaaa' },
    
      ];
      const titUso = 'Aplicaciones'
      const subUso = 'Es útil para describir direcciones en sistemas de coordenadas donde la simetría esférica es importante. En física, especialmente en problemas de movimiento orbital.';
      
  return (
    <main className={styles.mainP}>
        <InfoHome titHome={titHome} imgHome={imgHome} />
        <Definicion titDef={titDef} subDef={subDef}/>
        <CompoEjes ejes={ejes} ejeImg={ejeImg} />
        <Representacion titDefR={titDefR} subDefR={subDefR} repreImg={repreImg} />
        <Uso titUso={titUso} subUso={subUso} />
    </main>
  )
}
    
