import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PokemonCard from '../Components/PokemonCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchAllPokemon, searchPokemon, getPokemonBatch } from '../utils/searchQuery';

interface Pokemon {
  name: string;
  types: string[];
  image: string;
}

const Container = styled.main`
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 30px 0 20px 0;
  color: #ffcb05;
  text-shadow: 2px 2px #3b4cca;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 50px 0;
  font-size: 1.2em;
  border: 2px solid #3b4cca;
  border-radius: 5px;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #3b4cca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2a3a99;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [currentBatch, setCurrentBatch] = useState(0);
  const batchSize = 20;
  const navigate = useNavigate();

  const loadMorePokemons = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    if (searchQuery) {
      const searchResults = searchPokemon(searchQuery);
      setPokemons((prevPokemons) => [
        ...prevPokemons,
        ...searchResults.slice(prevPokemons.length, prevPokemons.length + batchSize),
      ]);
    } else {
      const startIndex = currentBatch * batchSize + 1;
      const endIndex = startIndex + batchSize - 1;
      const newPokemonList: Pokemon[] = [];

      for (let i = startIndex; i <= endIndex; i++) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const pokemon: Pokemon = {
            name: res.data.name,
            types: res.data.types.map((typeInfo: any) => typeInfo.type.name),
            image: res.data.sprites.front_default,
          };
          newPokemonList.push(pokemon);
        } catch (error) {
          console.error(`Error fetching Pokémon with ID: ${i}`, error);
        }
      }

      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemonList]);
      setCurrentBatch((prevBatch) => prevBatch + 1);
    }

    setLoading(false);
  }, [searchQuery, loading, currentBatch]);

  useEffect(() => {
    const initializePokemon = async () => {
      setLoading(true);
      await fetchAllPokemon();
      const initialBatch = getPokemonBatch(0, batchSize);
      setPokemons(initialBatch);
      setCurrentBatch(1);
      setLoading(false);
    };

    initializePokemon();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const searchResults = searchPokemon(query);
      setPokemons(searchResults);
    } else {
      const initialBatch = getPokemonBatch(0, batchSize);
      setPokemons(initialBatch);
      setCurrentBatch(1);
    }
  };

  const handleClick = (pokemonName: string, pokemon: Pokemon) => {
    navigate(`/pokedex/${pokemonName}`, { state: { pokemon } });
  };

  return (
    <Container>
      <Title>Pokémon Pokédex</Title>
      <SearchInput
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Grid>
        {pokemons.map((pokemon, index) => (
          <motion.div
            key={`${pokemon.name}-${index}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleClick(pokemon.name, pokemon)}
          >
            <PokemonCard pokemon={pokemon} />
          </motion.div>
        ))}
      </Grid>
      <LoadMoreButton onClick={loadMorePokemons} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </LoadMoreButton>
    </Container>
  );
};

export default Pokedex; 