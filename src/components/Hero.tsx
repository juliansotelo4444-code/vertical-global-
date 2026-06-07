import styles from './Hero.module.css'
import useInView from '../hooks/useInView'
import useCounter from '../hooks/useCounter'

const StatCounter = ({ target, suffix, label, inView }: {
  target: number
  suffix: string
  label: string
  inView: boolean
}) => {
  const count = useCounter(target, 2000, inView)
  return (
    <div className={styles.stat}>
      <span className={styles.statNum}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

const Hero = () => {
  const { ref, inView } = useInView(0.1)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="inicio" ref={ref}>
      <div className={styles.content}>
        <span className={`${styles.badge} fade-up ${inView ? 'visible' : ''}`}>
          Especialistas en elevación vertical
        </span>
        <h1 className={`fade-up ${inView ? 'visible' : ''} delay-1`}>
          Soluciones en <span className={styles.red}>ascensores</span> de alta calidad
        </h1>
        <p className={`fade-up ${inView ? 'visible' : ''} delay-2`}>
          Instalación, mantenimiento y modernización de ascensores para edificios
          residenciales y comerciales en Argentina.
        </p>
        <div className={`${styles.buttons} fade-up ${inView ? 'visible' : ''} delay-3`}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('servicios')}>
            Ver servicios
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('contacto')}>
            Contactarnos
          </button>
        </div>
        <div className={`${styles.stats} fade-up ${inView ? 'visible' : ''} delay-4`}>
          <StatCounter target={500} suffix="+" label="Ascensores instalados" inView={inView} />
          <StatCounter target={100} suffix="%" label="Satisfacción garantizada" inView={inView} />
        </div>
      </div>
    </section>
  )
}

export default Hero