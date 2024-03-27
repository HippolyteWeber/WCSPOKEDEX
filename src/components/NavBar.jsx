import PropTypes from "prop-types";
function NavBar({ previousClick, nextClick, pokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={previousClick}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={nextClick}>Suivant</button>
      ) : null}
    </div>
  );
}
NavBar.propTypes = {
  previousClick: PropTypes.func.isRequired,
  nextClick: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.string.isRequired,
  pokemonList: PropTypes.object.isRequired,
};
export default NavBar;
