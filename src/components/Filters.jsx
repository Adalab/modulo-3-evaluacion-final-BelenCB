import 'react';
import PropTypes from "prop-types";
import ls from "../services/localStorage";

const Filters = ({ name, house, updateName, updateHouse }) => {

    const handleChangeName = (ev) => {
        updateName(ev.target.value);
    };

    const handleChangeHouse = (ev) => {
        updateHouse(ev.target.value);
    };

    const handleReset = () => {
        updateName("");
        updateHouse("");
        ls.remove("name");
        ls.remove("house");
    };

    return (
        <form onSubmit={(ev) => ev.preventDefault()}>
            <div>
                <label htmlFor="name">Search by name:</label>
                <input name="name" id="name" value={name} onChange={handleChangeName} />
            </div>
            <div>
                <label htmlFor="house">
                Select the house:
                    <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                        <option value="">All</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Slytherin">Slytherin</option>
                    </select>
                </label>
            </div>
            <button className="reset-button" onClick={handleReset}>Restart search</button>
        </form>
    );
};

export default Filters;

Filters.propTypes = {
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    updateName: PropTypes.func.isRequired,
    updateHouse: PropTypes.func.isRequired
}
