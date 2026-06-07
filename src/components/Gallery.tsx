import { useState } from 'react'
import styles from './Gallery.module.css'
import img1 from '../assets/i1_home_3.webp'
import img2 from '../assets/i1_home_5.webp'
import img3 from '../assets/i1_home_60.webp'
import img4 from '../assets/i1_home_61.webp'

const images = [img1, img2, img3, img4]

const Gallery = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <section className={styles.gallery} id="galeria">
      <div className={styles.slider}>
        <img src={images[current]} alt={`Ascensor ${current + 1}`} className={styles.image} />

        <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>&#8592;</button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={next}>&#8594;</button>

        <div className={styles.dots}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.active : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery