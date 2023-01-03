import Link from 'next/link';

import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>404 - Page not found!</h1>
      </div>
      <div>
        <Link href={'/'}>
          <a className={styles.redirect}>
            Go back to <span>Home</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
