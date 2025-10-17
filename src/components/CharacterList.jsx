import 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({ characters, name, house }) => {
    return (
        <ul className="character-list">
            {characters
            .filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
                
            .filter(character => {
                if (house === "") {
                    return true;
                } else {
                    return house === character.house;
                }
            })

            .map(character => {
                return (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            <CharacterCard character={character} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default CharacterList;

CharacterList.proptypes = {
    characters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
}