
import styles from '../styles/home.module.css'
import Banner from '@/components/Banner'
import Presentacion from '@/components/Presentacion';
import ContenidoP from '@/components/ContenidoP';
export default function Home() {
  const banner = [
  
    { id:'1',Titulo:'La Web que necesitabas para Matemática para Ingeniería', Subtitulo:"Accede a la informacion que te servira para aprender y estudiar en tu materia favorita", url:'https://upload.wikimedia.org/wikipedia/commons/3/3b/3D_Cartesian_coordinates.PNG', alt:'img', width:'460',height:'370' , tituloHome:'aaaa' },

  ];
  const titBan='La Web que necesitabas para Matemática para Ingeniería';
  const subBan='Accede a la informacion que te servira para aprender y estudiar en tu materia favorita'


  const titPre='De que se trata?';
  const subPre=' Los sistemas de coordenadas son sistemas matemáticos y geométricos que se utilizan para representar y ubicar puntos, objetos o eventos en el espacio de manera precisa. Estos sistemas son fundamentales en matemáticas, física, geografía, ingeniería, informática, y muchas otras disciplinas.'

  const imgCard = [
    { url:'https://www.lifeder.com/wp-content/uploads/2020/01/Rectangulares-01.jpg', alt:'img', width:'150',height:'80' , tituloC:'Cartesianas', subC:'Un sistema de coordenadas tridimensional que utiliza ejes ortogonales (x, y, z) para representar puntos en el espacio mediante coordenadas rectangulares.',link:'./coordenadas/cartesianas',textLink:'Ver mas' },
    { url:'https://1.bp.blogspot.com/_JYVCuvXvfTg/SL35VppPBII/AAAAAAAAAAo/Av1ubGkY_eg/s320/coordenadas+esfericas.png', alt:'img', width:'150',height:'80' , tituloC:'Esfericas', subC:'Un sistema de coordenadas tridimensional que utiliza una coordenada radial , una coordenada polar  y una coordenada azimutal' ,link:'./coordenadas/esfericas',textLink:'Ver mas'},
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Polar_graph_paper.svg/220px-Polar_graph_paper.svg.png', alt:'img', width:'150',height:'80' , tituloC:'Polares', subC:'Un sistema de coordenadas bidimensional que utiliza una coordenada radial (r) y un ángulo polar (θ) para representar puntos en un plano.' ,link:'./coordenadas/Polares',textLink:'Ver mas'},
    { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfZd8gO1dFDnajKLf4do5oeFUmlInnoSCqQ&usqp=CAU', alt:'img', width:'150',height:'80' , tituloC:'Cilindricas', subC:'Un sistema de coordenadas  que combina coordenadas polares en el plano xy con una coordenada z para representar puntos en el espacio mediante coordenadas cilíndricas.' ,link:'./coordenadas/cilindricas',textLink:'Ver mas'},
    { url:'https://www.neurochispas.com/wp-content/uploads/2021/05/grafica-de-punto-en-coordenadas-cilindricas.png', alt:'img', width:'150',height:'80' , tituloC:'Conversiones', subC:'La conversión entre coordenadas cartesianas, cilíndricas, esféricas y polares es un conjunto de técnicas matemáticas que permite representar un punto en el espacio en diferentes sistemas de coordenadas.' ,link:'./coordenadas/conversion',textLink:'Ver mas'},
  ]
  return (
    
    <main className={styles.mainHome}>
      <Banner banner={banner} titBan={titBan} subBan={subBan}/>
    
      <Presentacion titPre={titPre} subPre={subPre}/>
      <ContenidoP imgCard={imgCard}/>
    </main>
  )
}
