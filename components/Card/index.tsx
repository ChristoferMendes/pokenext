import Image from 'next/image';
import Link from 'next/link';

import styles from './../../styles/Card.module.css';

export interface ASinglePokemon {
  pokemon: {
    id: number;
    name: string;
    url: string;
    types: [{ type: { name: string } }];
    height: number;
    weight: number;
  };
}

export default function Card({ pokemon }: ASinglePokemon) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={'120'}
        height={'120'}
        alt={`${pokemon.name} image`}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Details</a>
      </Link>
    </div>
  );
}
