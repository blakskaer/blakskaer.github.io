import Head from "next/head";
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <>
      <Head>
        <title>Blakskær | Contact</title>
        <meta name="keywords" content="contact"/>
      </Head>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>
          For collaborations feel free to contact me on <a href="https://www.linkedin.com/in/andreas-blakskaer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          I look forward to hearing from you!
        </p>
      </main>
    </>
  );
}
 
export default Contact;