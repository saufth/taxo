// React
import { FormEvent, useRef } from 'react'
// Services
import emailjs from '@emailjs/browser'
// Styles
import styles from '../../styles/sections/Contact.module.css'

/**
* The contact section of application
* @returns The Contact section component
*/
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const node = formRef.current

    if (node) {
      emailjs.sendForm(
        String(process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY),
        String(process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY),
        formRef.current,
        String(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
      ).then(() => {
        alert('Hemos recibido tu mensaje')
      }, () => {
        alert('Lo sentimos, hubo un problema al intentar enviar el mensaje')
      })
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          ¿Problemas con los números?
        </h1>
        <p className={styles.description}>
          Pongamosnos en contacto
        </p>
      </div>
      <form
        className={styles.form}
        onSubmit={sendEmail}
        ref={formRef}
      >
        <div>
          <input
            className={styles.input}
            type='text'
            name='contact_name'
            id='contact_name'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div>
          <input
            className={styles.input}
            type='email'
            name='contact_email'
            id='contact_email'
            placeholder='Tu Email'
            required
          />
        </div>
        <div>
          <textarea
            className={styles.input}
            name='contact_description'
            id='contact_description'
            rows={1}
            placeholder='Cuentanos sobre tu proyecto'
            defaultValue=''
            required
          />
        </div>
        <div className={styles.options}>
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
