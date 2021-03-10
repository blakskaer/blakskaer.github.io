import styles from '../../styles/Projects.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://api.github.com/users/blakskaer/repos');
  const data = await res.json();

  const paths = data.map(project => {
    return {
      params: { id: project.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log('THEEEE id:', id)
  const res = await fetch('https://api.github.com/users/blakskaer/repos/' + id);
  const data = await res.json();

  return {
    props: { project: data }
  }
}

const Details = ({ project }) => {
  const url = project.html_url;
  console.log('#### project', project);
  console.log(typeof(url));

  return (
    <div>
      <h1>Navn:{ project.name }</h1>
      <p>Beskrivelse:{ project.description }</p>
      <a href={ project.html_url } className={styles.btn}>See on GitHub</a>
    </div>
  );
}
 
export default Details;