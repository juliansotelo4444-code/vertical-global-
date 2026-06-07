import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src="/logo.png" alt="Vertical Global" className={styles.logo} />
        <p>Soluciones integrales en elevación vertical.<br />Buenos Aires, Argentina.</p>
      </div>

      <div className={styles.links}>
        <h4>Navegación</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Sobre nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div className={styles.contact}>
  <h4>Contacto</h4>
  <ul>
    <li>+54 9 11 3698-4929</li>
    <li>info@ascensoresverticalglobal.com</li>
    <li>ascensoresverticalglobal.com</li>
  </ul>
</div>

      <div className={styles.bottom}>
        <p>© 2026 Vertical Global. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer