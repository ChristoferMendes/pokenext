import Image from 'next/image';
import Link from 'next/link';

import styles from './../../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={'/images/icon.png'} width={50} height={60} alt={'A pokeball icon used as the logo in the header'} />
        <h1 className={styles.title}>
          <Link href={'/'}>
            <a>PokeNext</a>
          </Link>
        </h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
