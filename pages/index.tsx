import React from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

interface PokemonData {
  results: [
    {
      id: number;
      name: string;
      url: string;
    },
  ];
}

export interface Pokemon {
  pokemons: [
    {
      id: number;
      name: string;
      url: string;
      types: [{ type: { name: string } }];
      height: number;
      weight: number;
    },
  ];
}

export const getStaticProps = async () => {
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const maxPokemons = 251;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data: PokemonData = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

const Home = ({ pokemons }: Pokemon) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <React.Fragment key={pokemon.id}>
            <Card pokemon={pokemon} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Home;
