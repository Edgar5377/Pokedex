import React from 'react';
import { useData } from '../../DataContext';
import '../../index.css';

function PokemonDetails({ name, national_id, weight, height, type1, type2, img_url }) {
  return (
    <div className="col">
      <div className="pokemon-details">
        <h2>{name}</h2>
        <p>ID: {national_id}</p>
        <p>Weight: {weight} kg</p>
        <p>Height: {height} m</p>
        <p>type1: {type1} m</p>
        <p>type2: {type2} m</p>
        <img src={img_url} alt={name} />
      </div>
    </div>
  );
}

function PreEvolution({ pre_evolution }) {
  if (!pre_evolution) {
    return null;
  }

  const { name, national_id, weight, height,type1, type2, img_url } = pre_evolution;
  return (
    <div className="col">
      <div>
        <h3>Pre-evolution</h3>
        <p>Name: {pre_evolution.name}</p>
        <p>ID: {pre_evolution.national_id}</p>
        <p>type1: {pre_evolution.type1} m</p>
        <p>type2: {pre_evolution.type2} m</p>
        <img src={pre_evolution.img_url} alt={name} />
      </div>
    </div>
  );
}

function Evolutions({ evolutions }) {
    if (!evolutions || evolutions.length === 0) {
      return null;
    }
  
    return (
      <div className="col">
        <div>
          <h3>Evolutions</h3>
          <div className="row">
            {evolutions.map((evolution, index) => (
              <div className="col" key={index}>
                <p>Name: {evolution.name}</p>
                <p>ID: {evolution.national_id}</p>
                <p>type1: {evolution.type1} m</p>
                <p>type2: {evolution.type2} m</p>
                <img src={evolution.img_url} alt={evolution.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

function PokemonDescription(props) {
  const { apiData } = useData();

  if (!apiData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const { pre_evolution, evolutions } = apiData;

  return (
    <div className="pokemon-description-container">
      <div className="row">
        <PokemonDetails {...apiData} />
        <PreEvolution pre_evolution={pre_evolution} />
        <Evolutions evolutions={evolutions} />
      </div>
    </div>
  );
}

export default PokemonDescription;
