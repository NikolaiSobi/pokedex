import './App.css'
import Pokecard from './Pokecard'
import pokemonList from './Pokedex';

function App() {
  return (
    <div className="App">
      {pokemonList.map((pokemon, key) => {
                return <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type} exp={pokemon.base_experience} key={key}/>
            })}
      
    </div>
  );
}

export default App;
