import PropTypes from "prop-types";
function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    setPokemonIndex(index);
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleClick(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
export default NavBar;
