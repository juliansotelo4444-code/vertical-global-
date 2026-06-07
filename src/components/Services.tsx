import styles from './Services.module.css'
import useInView from '../hooks/useInView'

const services = [
  {
    icon: '🔩',
    title: 'Mantenimiento preventivo',
    description: 'Contratos mensuales con revisiones técnicas programadas para garantizar la seguridad, durabilidad y cumplimiento normativo.',
  },
  {
    icon: '🚨',
    title: 'Servicio de urgencias 24/7',
    description: 'Atención inmediata ante cualquier falla o emergencia, los 365 días del año. Técnicos disponibles en todo momento.',
  },
  {
    icon: '🔧',
    title: 'Reparaciones',
    description: 'Diagnóstico y reparación de cualquier tipo de falla mecánica, eléctrica o electrónica en ascensores de todas las marcas.',
  },
  {
    icon: '⚡',
    title: 'Modernización',
    description: 'Actualización de ascensores antiguos con tecnología moderna, mejorando eficiencia energética, seguridad y confort.',
  },
  {
    icon: '🏗️',
    title: 'Instalación',
    description: 'Montaje completo de ascensores eléctricos e hidráulicos para edificios residenciales, comerciales e industriales.',
  },
  {
    icon: '📋',
    title: 'Habilitaciones',
    description: 'Gestión integral de habilitaciones municipales, inspecciones técnicas y documentación requerida por normativa.',
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
          <p>Desde el mantenimiento preventivo hasta urgencias, cubrimos todas las necesidades de tus ascensores.</p>
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