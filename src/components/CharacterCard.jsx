import 'react';
import PropTypes from "prop-types";
import HogwartsLogo from '../images/hogwarts-logo.jpg';

const CharacterCard = ({ character }) => {
    return (
        <>
            <img className="character-image" src={character.image === "" ? HogwartsLogo : character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.species}</p>
        </>
    );
};

export default CharacterCard;

CharacterCard.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired
    }).isRequired
}