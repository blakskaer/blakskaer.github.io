import Head from "next/head"
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <>
      <Head>
        <title>Blakskær | About</title>
        <meta name="keywords" content="about blakskaer"/>
      </Head>

      <main className={styles.main}>
        <h1>About</h1>
        <div className={styles.container}>
          <div className={styles.text}>My name is Andreas Blakskær. I create websites. I also make music and I like cats.<br />
            I hold an MA in Psychology of Language from University of Copenhagen and have a professional background in programming and online marketing in major German corporations such as Zalando and Auto1. 
            On this basis I offer hands on technical and creative solutions for small businesses. 
            In all my endeavours I hold transparency, simplicity and functionality as guiding principles.
            I look forward to working with you!</div>
          <div className={styles.imgFrame}>
            <img src="/img_blakskaer.jpg" alt="photo of blakskaer" />
          </div>
        </div>
      </main>
    </>
  );
}
 
export default About;