import React from "react";

const PokeCard = ({ poke }) => {
  console.log(poke);
  return (
    <div className="pokeCard">
      <img src={poke.sprites.front_default} alt="poke sprite" />
      <div className="pokeCard__data">
        <p className="pokeName">{poke.name.toUpperCase()}</p>
        <p>HP {poke.stats[0].base_stat}</p>
        <div className="pokeData">
          <div className="pokeData__types">
            <div className="pokeData__types__images">
              {poke.types.map((type, index) => {
                return (
                  <img
                    key={`${index}-poke`}
                    src={`https://raw.githubusercontent.com/LeoCoronel/pokedexReact/704e70232dad44303ef34478b29248b2d93b603c/src/img/icons/${type.type.name}.svg`}
                    alt=""
                    className="typeIcon"
                  />
                );
              })}
            </div>
            {/* {poke.types.map((type, index) => (
              <p key={index}>{type.type.name}</p>
            ))} */}
            <p>TYPE</p>
          </div>
          <div className="attack">
            <p>{poke.stats[1].base_stat}</p>
            <p>ATTACK</p>
          </div>
          <div className="defense">
            <p>{poke.stats[2].base_stat}</p>
            <p>DEFENSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
