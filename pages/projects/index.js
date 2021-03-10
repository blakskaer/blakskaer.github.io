import Head from 'next/head'
import styles from '../../styles/Projects.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/blakskaer/repos');
  const data = await res.json();

  return {
    props: { projects: data }
  }
}

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Blakskær | Projects</title>
        <meta name="keywords" content="blakskaer projects"/>
      </Head>
      <main className={styles.main}>
        <h1>My Projects</h1>
        {projects.map(project => (
          <a href={'https://github.com/blakskaer/' + project.name}
            target="_blank" rel="noopener noreferrer"
            className={styles.single}
            key={project.id}
          >
            { project.name }
          </a>
        ))}
      </main>
    </>
  )
}

export default Projects;