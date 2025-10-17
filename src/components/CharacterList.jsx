import 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({ characters, name, house }) => {
    return (
        <ul className="character-list">
            {name !== "" && characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase())).length === 0 ? (
                <p className='no-character-text'>Sorry muggle, the character you're looking for doesn't exist in the wizarding world</p>
            ) : (
                characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
            )
                
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

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
}