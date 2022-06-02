
import styles from '../styles/Home.module.css'
import img from './image 22.png'
import img2 from './index.jpg'
import Cards from '../components/Cards';
import "swiper/css/bundle";

export default function Home() {
  // console.log(img)
  return (
    <> 
    <div className={styles.page_container}>
    <div className={styles.page1}>
      <h1 className={styles.h1}>Centre for Cultural & Art Relations</h1>
      <div className={styles.overlay_container}>
      <img src={img.src} alt="background" className={styles.overlay} />
      </div>
      </div>

      <div className = {styles.page2}>
      <div className={styles.preamble}>
        <h1 className={styles.h}> Preamble</h1>
          <p>
          It goes without saying that creativity and innovation are indispensable qualities in the engineering field. Even though engineering students are introduced to the engineering design process, this does not necessarily translate into the development of creative ability that can be applied more broadly. Introducing performing arts such as dance, music, drawing, painting, and drama as an integral part of engineering curriculum and encouraging students to learn may help to develop and train engineers to be creative. Furthermore, practicing performing arts may improve engineers&apos; discipline, dedication, focus, and confidence. The ability to innovate and communicate, which can be developed through music and the arts, is what leads to scientific excellence. Indeed, ancient Indian universities like Takshashila, Vallabhi, Vikramshila, and Nalanda used holistic approaches in education system, combining arts, communication, vocational skills with science and medicine.
Read More..
          </p>
        </div>
        <div className={styles.image2_container}>
        <img src={img2.src} alt="" className={styles.image2} />
      </div>
      </div>
      <div className={styles.page3}>
      <Cards/>
      </div>
      <div className={styles.footer}> 
      <p>Dr. Rajanikant G. K.<br></br>
Chairperson<br></br>
Professor, School of Biotechnology<br></br>
NIT Calicu<br></br>
</p>
      </div>
      </div>
      </>
  
    
      
      
        
      
      
    
      )
}
