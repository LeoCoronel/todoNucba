import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokeCard from "../../components/PokeCard/PokeCard";
import Poke404 from "./Poke404";
import axios from "axios";
import { useQuery } from "react-query";

const Poke = () => {
  const [search, setSearch] = useState("");
  const [poke, setPoke] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  const fetchPoke = () => {
    setError(false);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((data) => setPoke(data.data))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const { isLoading, isRefetching, data, refetch } = useQuery(
    "poke",
    fetchPoke,
    {
      refetchOnWindowFocus: false,
      enabled: false, // (!) handle refetchs manually
    }
  );

  return (
    <div className="poke">
      <SearchBar handleSubmit={handleSubmit} setSearch={setSearch}></SearchBar>
      {error ? (
        <Poke404 />
      ) : isLoading && !isRefetching ? (
        <p>Buscando</p>
      ) : poke !== null ? (
        <PokeCard poke={poke}></PokeCard>
      ) : null}
    </div>
  );
};

export default Poke;
