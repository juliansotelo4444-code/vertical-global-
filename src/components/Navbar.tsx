import styles from './Navbar.module.css'

const Navbar = () => {
const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

return (
    <nav className={styles.nav}>
    <img src="/logo.png" alt="Vertical Global" className={styles.logo} />

    <ul className={styles.links}>
        <li><button onClick={() => scrollTo('inicio')}>Inicio</button></li>
        <li><button onClick={() => scrollTo('nosotros')}>Sobre nosotros</button></li>
        <li><button onClick={() => scrollTo('servicios')}>Servicios</button></li>
        <li><button onClick={() => scrollTo('contacto')}>Contacto</button></li>
    </ul>

    <button className={styles.cta} onClick={() => scrollTo('contacto')}>
        Solicitar presupuesto
    </button>
    </nav>
)
}

export default Navbar