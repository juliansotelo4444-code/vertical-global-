import styles from './Services.module.css'
import useInView from '../hooks/useInView'

const services = [
  {
    icon: '🏗️',
    title: 'Instalación de ascensores',
    description: 'Montaje completo de ascensores eléctricos y hidráulicos para edificios residenciales, comerciales e industriales.',
  },
  {
    icon: '🔩',
    title: 'Mantenimiento preventivo',
    description: 'Contratos de mantenimiento mensual con revisiones técnicas programadas para garantizar la seguridad y durabilidad.',
  },
  {
    icon: '⚡',
    title: 'Modernización',
    description: 'Actualización de ascensores antiguos con tecnología moderna, mejorando eficiencia energética y confort.',
  },
  {
    icon: '🚨',
    title: 'Servicio de urgencias',
    description: 'Atención de emergencias las 24 horas, los 365 días del año. Técnicos disponibles ante cualquier imprevisto.',
  },
  {
    icon: '📋',
    title: 'Habilitaciones',
    description: 'Gestión integral de habilitaciones municipales, inspecciones y documentación técnica requerida.',
  },
  {
    icon: '♿',
    title: 'Accesibilidad',
    description: 'Soluciones para personas con movilidad reducida: plataformas salvaescaleras y montacargas.',
  },
]

const Services = () => {
  const { ref, inView } = useInView()

  return (
    <section className={styles.services} id="servicios" ref={ref}>
      <div className={`fade-up ${inView ? 'visible' : ''}`}>
        <div className={styles.header}>
          <span className={styles.tag}>Servicios</span>
          <h2>Todo lo que necesitás en un solo lugar</h2>
          <p>Desde la instalación hasta el mantenimiento preventivo, ofrecemos soluciones completas para cualquier tipo de edificio.</p>
        </div>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <div
            className={`${styles.card} fade-up ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
            key={service.title}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services