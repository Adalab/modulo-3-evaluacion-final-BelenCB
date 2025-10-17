import 'react';
import PropTypes from "prop-types";
import HogwartsLogo from '../images/hogwarts-logo.jpg';
import GryffindorLogo from '../images/gryffindor.jpg';
import RavenclawLogo from '../images/ravenclaw.jpg';
import HufflepuffLogo from '../images/hufflepuff.jpg';
import SlytherinLogo from '../images/slytherin.jpg';

const CharacterDetail = ({ character }) => {

    const selectHouseLogo = () => {
        if (character.house === "Gryffindor") { return GryffindorLogo    
        } else if (character.house === "Ravenclaw") {return RavenclawLogo
        } else if (character.house === "Hufflepuff") {return HufflepuffLogo
        } else if (character.house === "Slytherin") {return SlytherinLogo
        } else {return HogwartsLogo}
    }

    return (
        <div className="character-detail">
            <div>
                <img className="character-image" src={character.image === "" ? HogwartsLogo : character.image} alt={character.name} />
            </div>
            <div className="character-info">
                <h2>{character.name}</h2>
                <p>Date of birth: {character.dateOfBirth}</p>
                <p>{character.alive === true ? "Alive 💖" : "Dead 💀​"}</p>
                <p>Nicknames: {character.alternate_names.join(", ")}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Ancestry: {character.ancestry}</p>
                <p>House: {character.house}</p>
                <p>Patronus: {character.patronus}</p>  
            </div>
            <div>
                <img className="house-logo" src={selectHouseLogo()} alt={character.house} />
            </div>
        </div>
    );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        alive: PropTypes.bool.isRequired,
        alternate_names: PropTypes.array.isRequired,
        gender: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        ancestry: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired,
        patronus: PropTypes.string.isRequired
    }).isRequired
}