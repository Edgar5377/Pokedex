import React from "react";
import { useData } from '../../DataContext';
import '../../index.css';

function BaseStats(props) {
    const { apiData } = useData();
  
    if (!apiData) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  
    const {attack, def, s_attack, s_def, speed} = apiData;
  
    return (
        <div>
          <h3>Stats</h3>
          <p>Attack: {attack}</p>
          <p>Defense: {def}</p>
          <p>Special Defense: {s_def} kg</p>
          <p>Special Attack: {s_attack} m</p>
          <p>Speed: {speed} m</p>
        </div>
      );
}

export default BaseStats;