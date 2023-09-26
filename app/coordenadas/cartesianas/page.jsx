import React from 'react'
import InfoHome from '@/components/InfoHome';
import Definicion from '@/components/Definicion';
import CompoEjes from '@/components/CompoEjes';
import Representacion from '@/components/Representacion';
import styles from '../../../styles/home.module.css'
import Uso from '@/components/Uso';
export default function page() {
  const titPre='Sistema de Coordenadas Cartesianas';


  const titHome =  'Coordendas Cartesianas';

  const imgHome =[
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cartesian_coordinates_3D.svg/350px-Cartesian_coordinates_3D.svg.png', alt:'img', width:'450',height:'430' , tituloHome:'aaaa' }
  ]

  const titDef = 'Definicion :'
  const subDef = 'Este sistema de coordenadas está formada por 3 dimensiones, se basa en ejes ortogonales (perpendiculares) que se cruzan en un punto de origen. Así pues, en geometría euclidiana el espacio tridimensional se suele representar con un sistema de coordenadas de tres ejes, todos perpendiculares entre sí. '

  const ejes =[
    {eje:'El eje X representa la profundidad'},
    {eje:'El eje Y indica el ancho.'},
    {eje:'El eje Z corresponde a la altura.'},
  ];
  const ejeImg =[
  
    { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTpNZohMw0yW5rdjmgsInEmXdj6wSYAbbh9wtiMzCHx_07ZUAzATIO-x8fK7BKNMWQKE&usqp=CAU', alt:'img', width:'330',height:'280' , tituloHome:'aaaa' },

  ];

  const titDefR = 'Representación '
  const subDefR = 'Se utiliza para representar puntos en un plano o en el espacio tridimensional mediante coordenadas cartesianas  (x, y, z). El punto de origen es (0, 0, 0) en 3D.'
  const repreImg =[
  
    { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://www.geometriaanalitica.info/wp-content/uploads/2020/07/sistema-de-coordenadas-cartesianas-en-el-espacio.png?ezimgfmt=ng:webp/ngcb2', alt:'img', width:'350',height:'300' , tituloHome:'aaaa' },

  ];
  const titUso = 'Aplicaciones'
  const subUso = 'Ampliamente utilizado en geometría, álgebra lineal, física, programación de gráficos 3D y muchas otras disciplinas. También esdecuado para describir movimientos y ubicaciones precisas.'
  
  return (
   <main className={styles.mainP}>

    <InfoHome titHome={titHome} imgHome={imgHome}/>

    <Definicion titDef={titDef} subDef={subDef} />
    <CompoEjes ejes={ejes} ejeImg={ejeImg}/>
    <Representacion titDefR={titDefR} subDefR={subDefR} repreImg={repreImg}/>
    <Uso titUso={titUso} subUso={subUso}/>

   </main>
  )
}
