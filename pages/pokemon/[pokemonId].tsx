import { GetStaticPaths, GetStaticProps } from 'next';
import Image, { ImageLoaderProps } from 'next/image';
import { ASinglePokemon } from '../../components/Card';

import styles from '../../styles/Pokemon.module.css';

import { useRouter } from 'next/router';
import { Loading } from '../../components/Loading';

const maxPokemons = 251;
const api = 'https://pokeapi.co/api/v2/pokemon/';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //Add a index manually
  const paths = data.results.map((_: any, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.pokemonId;

  const res = await fetch(`${api}/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }: ASinglePokemon) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const myLoader = ({ src }: ImageLoaderProps) => {
    return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${src}.svg`;
  };

  const { id, name, types, height, weight } = pokemon;
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{name}</h1>
      <Image src={String(id)} width={'200'} height={'200'} alt={`${name} image`} loader={myLoader} />
      <div>
        <h3>Number: </h3>
        <p>#{id}</p>
      </div>
      <h3>Type: </h3>
      <div className={styles.types_container}>
        {types.map((item, index) => (
          <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
            {item.type.name}
          </span>
        ))}
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h3>Height: </h3>
          <p>{height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h3>Weight</h3>
          <p>{weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
