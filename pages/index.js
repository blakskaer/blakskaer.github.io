import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blakskær | Home</title>
        <meta name="keywords" content="software developer"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Andreas Blakskær
        </h1>

        <p className={styles.description}>
          <span className={styles.reactJs}>ReactJS Developer</span>
          <code className={styles.code}>based in Barcelona</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/blakskaer/js-game-tic-tac-toe" 
            target="_blank" rel="noopener noreferrer"  
            className={`${styles.card} ${styles.card1}`}
          >
            <h3>HTML, CSS & JS &rarr;</h3>
            <p>HTML, CSS and JS Tic Tac Toe game.</p>
          </a>

          <a href="https://github.com/blakskaer/big-book-app" 
            target="_blank" rel="noopener noreferrer" 
            className={`${styles.card} ${styles.card2}`}
          >
            <h3>ReactJS &rarr;</h3>
            <p>React app with hooks, global search and testing</p>
          </a>

          <a
            href="https://github.com/blakskaer/react-job-api-app" 
            target="_blank" rel="noopener noreferrer"
            className={`${styles.card} ${styles.card3}`}
          >
            <h3>API handling &rarr;</h3>
            <p>Axios calls, search form and pagination.</p>
          </a>

          <a
            href="https://github.com/blakskaer/big-book-app"
            target="_blank" rel="noopener noreferrer"
            className={`${styles.card} ${styles.card4}`}
          >
            <h3>Json Server &rarr;</h3>
            <p>
              Create, read, update & delete. + global search.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
