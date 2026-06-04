import styles from './Hero.module.css'

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <span className={styles.badge}>Especialistas en elevación vertical</span>
        <h1>Soluciones en <span className={styles.red}>ascensores</span> de alta calidad</h1>
        <p>Instalación, mantenimiento y modernización de ascensores para edificios residenciales y comerciales. Más de 20 años de experiencia en Argentina.</p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('servicios')}>
            Ver servicios
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('contacto')}>
            Contactarnos
          </button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Ascensores instalados</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>20+</span>
            <span className={styles.statLabel}>Años de experiencia</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Satisfacción garantizada</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero