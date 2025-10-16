import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCharacters from "../services/api";
import ls from "../services/localStorage";
import HPBanner from '../images/hp-banner.jpg';
import HogwartsLogo from '../images/hogwarts-logo.jpg';
import '../styles/HomePage.css';


const HomePage = () => {

    const [characters, setCharacters] = useState(ls.get("characters", []));
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    
    useEffect(() => {
        if (characters.length === 0) {
            getCharacters().then(data => {
            setCharacters(data);
            ls.set("characters", data);
            })
        }
    });

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    };

    const handleChangeHouse = (ev) => {
        setHouse(ev.target.value);
    };
    
    return (
        <>
            <div className="header-container">
                <img className="header-image" src={HPBanner} alt="Imagen de los principales personajes de Harry Potter luchando con varitas" />
            </div>
            <div>
                <h1 className="title">Find your favourite character</h1>
            </div>
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
            </form>
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
                                <img className="character-image" src={character.image === "" ? HogwartsLogo : character.image} alt={character.name} />
                                <p>{character.name}</p>
                                <p>{character.species}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    };

export default HomePage;