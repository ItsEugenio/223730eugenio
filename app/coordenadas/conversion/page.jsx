import React from 'react'
import Galeria from '@/components/Galeria';
import InfoHome from '@/components/InfoHome';
import Subtitulo from '@/components/Subtitulo';
import styles from '../../../styles/home.module.css'
export default function page() {
    const galeria =[
        { url:'https://i.postimg.cc/0Kdg9kB8/carte-Cilin.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Cartesianas a Cilíndricas' },
        { url:'https://i.postimg.cc/Wd4RPP6v/carte-Esferi.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Cartesianas a Esféricas' },
        { url:'https://i.postimg.cc/Z0rz8HK1/carte-Polar.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Cartesianas a Polares' },
        { url:'https://i.postimg.cc/7f9vcLz9/cilin-Carte.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Cilíndricas a Cartesianas' },
        { url:'https://i.postimg.cc/7CCpfMWt/esferi-Carte.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Esféricas a Cartesianas' },
        { url:'https://i.postimg.cc/G4gWLSqs/polar-Carte.png', alt:'img', width:'250',height:'180' , Titulo:'Coordenadas Polares a Cartesianas' },
      ];
      const titHome = 'Convertir coordendas';
      const imgHome =[
        { url:'https://math.libretexts.org/@api/deki/files/80687/Screen_Shot_2022-05-28_at_4.05.35_PM.png', alt:'img', width:'500',height:'300' , tituloHome:'aaaa' }
      ];
      const banner = [
        {Subtitulo:'La conversión entre coordenadas esféricas, cilíndricas, cartesianas y polares es un concepto importante en matemáticas y ciencias aplicadas, como la física y la ingeniería. Estos sistemas de coordenadas se utilizan para describir la posición y orientación de puntos en el espacio tridimensional de diferentes maneras'}
      ]

  return (
    <main className={styles.mainP}>
      <InfoHome titHome={titHome} imgHome={imgHome}/>
      <Subtitulo banner={banner}/>
      <Galeria galeria={galeria} />
      
    </main>

  )
}
