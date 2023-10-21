import React, { useState } from "react";
import { useData } from '../../DataContext'; 

function PokedexSearchBar(props) {
    const [searchInput, setSearchInput] = useState("");
    const { updateApiData } = useData(); 

    const handleSearch = () => {
        const apiUrl = `http://10.100.232.143:3002/pokemon/name/${searchInput}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                updateApiData(data);
            })
            .catch((error) => {
                console.error("Error al buscar el Pokémon:", error);
            });
    };

    return (
        <div className="container mt-4">
            <h1 className="display-4">Pokedex</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Pokémon"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleSearch}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PokedexSearchBar;
