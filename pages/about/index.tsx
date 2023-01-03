import styles from '../../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        This project had been built with Next-JS and Typescript. Go back to Home to see the pokemons and their details
        loading with SSR (Server Side Rendering)! Pokemon that have an id higher than 251 is loaded by the client, not
        by the server.
      </p>
    </div>
  );
}

export default About;
