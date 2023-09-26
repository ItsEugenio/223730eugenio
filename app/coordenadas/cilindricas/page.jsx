import React from 'react'
import InfoHome from '@/components/InfoHome'
import Definicion from '@/components/Definicion';
import CompoEjes from '@/components/CompoEjes';
import Representacion from '@/components/Representacion';
import Uso from '@/components/Uso';
import styles from '../../../styles/home.module.css'
export default function page() {
    const titHome =  'Coordendas Cilindricas';
    const imgHome =[
        { url:'https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230620.181811/resources/88a96709e8167d24caafe6158bb6f1ddd5d1525a', alt:'img', width:'400',height:'180' , tituloHome:'aaaa' }
      ];
    const titDef = 'Definicion :';
    const subDef = 'Las coordenadas cilíndricas son un sistema de coordenadas tridimensional utilizado en geometría y matemáticas para describir la posición de un punto en el espacio y es un sistema de referencia tridimensional.';
    const ejes =[
        {eje:'"r" Esta coordenada mide la distancia desde el punto al origen del sistema de coordenadas cilíndricas. Es equivalente al radio en coordenadas polares.'},
        {eje:'"φ" La coordenada azimutal representa el ángulo que forma el vector desde el origen hasta el punto con el plano xy. Generalmente se mide en radianes o grados, y su rango va de 0 a 2π (o de 0° a 360°), donde 0 representa la dirección positiva del eje x.'},
        {eje:'"z" La coordenada axial indica la distancia desde el punto al plano xy, en la dirección vertical. Es similar a la coordenada z en un sistema de coordenadas cartesianas.'}
       
      ];
      const ejeImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cylindrical_coordinates2.svg/220px-Cylindrical_coordinates2.svg.png', alt:'img', width:'250',height:'180' , tituloHome:'aaaa' },
    
      ];
      const titDefR = 'Representación '
      const subDefR = 'Para representar un punto en coordenadas cilíndricas, se usa la notación (r, φ, z), donde r es la coordenada radial, φ es la coordenada azimutal y z es la coordenada axial. El sistema de coordenadas cilíndricas es especialmente útil cuando se trabaja con objetos cuyas propiedades están relacionadas con la simetría cilíndrica';
      const repreImg =[
      
        { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEA92xcxEJOIuAd5JKlpFE_1cxbMl4EXUhMowILMPcyUkizTBiQT_ZkADB1DqFrTtLw7k&usqp=CAU', alt:'img', width:'350',height:'480' , tituloHome:'aaaa' },
    
      ];
      const titUso = 'Aplicaciones';
      const subUso = 'Las coordenadas cilíndricas son fundamentales para describir la geometría y las propiedades mecánicas de objetos como cilindros, conos y tubos. En problemas de física y matemáticas, las coordenadas cilíndricas son útiles para resolver ecuaciones diferenciales y problemas de valor límite con simetría cilíndrica, como la ley de Gauss para campos eléctricos y magnéticos en física electromagnética.';
      

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
