import styles from "./Contact.module.css";
import useInView from "../hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section className={styles.contact} id="contacto" ref={ref}>
      <div className={`fade-up ${inView ? "visible" : ""}`}>
        <div className={styles.header}>
          <span className={styles.tag}>Contacto</span>
          <h2>¿Necesitás un presupuesto?</h2>
          <p>Completá el formulario y un asesor te contactará a la brevedad.</p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={`fade-left ${inView ? "visible" : ""} delay-2`}>
          <div className={styles.info}>
            <div className={styles.item}>
  <div className={styles.itemIcon}>📞</div>
  <div>
    <h4>Teléfono</h4>
    <p>+54 9 11 3698-4929</p>
  </div>
</div>
<div className={styles.item}>
  <div className={styles.itemIcon}>✉️</div>
  <div>
    <h4>Email</h4>
    <p>info@ascensoresverticalglobal.com</p>
  </div>
</div>

            <div className={styles.item}>
              <div className={styles.itemIcon}>📍</div>
              <div>
                <h4>Ubicación</h4>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}>🕐</div>
              <div>
                <h4>Horario de atención</h4>
                <p>
                  Lunes a Viernes de 8 a 18 hs
                  <br />
                  Urgencias: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`fade-right ${inView ? "visible" : ""} delay-3`}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <input type="text" placeholder="Nombre y apellido" required />
              <input type="tel" placeholder="Teléfono" required />
            </div>
            <input type="email" placeholder="Correo electrónico" required />
            <select defaultValue="">
              <option value="" disabled>
                Tipo de consulta
              </option>
              <option>Instalación de ascensor nuevo</option>
              <option>Mantenimiento preventivo</option>
              <option>Modernización de ascensor</option>
              <option>Urgencia / reparación</option>
              <option>Habilitación municipal</option>
            </select>
            <textarea placeholder="Contanos más sobre tu proyecto o consulta..." />
            <button type="submit" className={styles.submit}>
              Enviar consulta →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
