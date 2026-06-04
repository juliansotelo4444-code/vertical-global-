import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.header}>
        <span className={styles.tag}>Sobre nosotros</span>
        <h2>Líderes en el rubro desde hace décadas</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            En <strong>Vertical Global</strong> nos especializamos en brindar soluciones
            integrales de elevación vertical. Trabajamos con las mejores marcas del mercado
            y contamos con un equipo técnico altamente capacitado.
          </p>
          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.pointIcon}>🏅</div>
              <div>
                <h4>Calidad certificada</h4>
                <p>Todos nuestros trabajos cumplen con las normativas vigentes de seguridad y calidad de Argentina.</p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.pointIcon}>🔧</div>
              <div>
                <h4>Servicio técnico 24/7</h4>
                <p>Equipo de guardia permanente para atender cualquier urgencia o emergencia.</p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.pointIcon}>📋</div>
              <div>
                <h4>Proyectos llave en mano</h4>
                <p>Nos encargamos de todo: proyecto, habilitación municipal y puesta en marcha.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.shaft}>
            <div className={styles.car}>▲</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About