import React from 'react'
import InfoHome from '@/components/InfoHome'
import Definicion from '@/components/Definicion';
import CompoEjes from '@/components/CompoEjes';
import Representacion from '@/components/Representacion';
import Uso from '@/components/Uso';
import styles from '../../../styles/home.module.css'
export default function page() {
    const titHome =  'Coordendas Polares';
    const imgHome =[
        { url:'https://k12.libretexts.org/@api/deki/files/14653/f-d_ccdf27d83e18011dad541a377ca59488bc86cc410551a70581eb79a9%252BIMAGE_TINY%252BIMAGE_TINY.jpg', alt:'img', width:'400',height:'400' , tituloHome:'aaaa' }
      ];
    const titDef = 'Definicion :';
    const subDef = 'El sistema de coordenadas polares se utiliza principalmente en geometría y trigonometría para describir la posición de puntos en un plano, es un sistema de referencia bidimensional.';
    
    const ejes =[
        {eje:'"r" es la distancia entre el origen de coordenadas y el punto. Se denomina coordenada radial.'},
        {eje:'"θ" es el ángulo que forma el eje X con la recta que pasa por el punto y el origen. Se llama coordenada angular o azimutal.'},
       
      ];
      const ejeImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://math.libretexts.org/@api/deki/files/2291/6.4.2.png', alt:'img', width:'250',height:'180' , tituloHome:'aaaa' },
    
      ];
      const titDefR = 'Representación '
      const subDefR = 'Un punto en coordenadas polares se describe como (r, θ). La  posición del punto se interpreta como la distancia desde el origen y el ángulo con respecto al eje X positivo.'
      const repreImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Coordenadas_polares.svg', alt:'img', width:'300',height:'300' , tituloHome:'aaaa' },
    
      ];
      const titUso = 'Aplicaciones';
      const subUso = 'Ampliamente utilizado en geometría analítica, especialmente para describir ecuaciones de curvas y funciones trigonométricas, también es útil para describir direcciones y ubicaciones en situaciones donde la simetría polar es relevante, como en sistemas radiales.';
      
  return (
    <main className={styles.mainP}>
        <InfoHome titHome={titHome} imgHome={imgHome} />
        <Definicion titDef={titDef} subDef={subDef} />
        <CompoEjes ejes={ejes} ejeImg={ejeImg} />
        <Representacion titDefR={titDefR} subDefR={subDefR} repreImg={repreImg} /> 
        <Uso titUso={titUso} subUso={subUso} />
    </main>
  )
}
