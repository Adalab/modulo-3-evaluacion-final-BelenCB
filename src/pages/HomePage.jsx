import { useState, useEffect } from 'react';
import getCharacters from "../services/api";
import ls from "../services/localStorage";
import Header from '../components/Header';
import Filters from '../components/Filters';
import CharacterList from '../components/CharacterList';
import '../styles/HomePage.css';

const HomePage = () => {

    const [characters, setCharacters] = useState(ls.get("characters", []));
    const [name, setName] = useState(ls.get("name", ""));
    const [house, setHouse] = useState(ls.get("house",""));
    
    useEffect(() => {
        if (characters.length === 0) {
            getCharacters().then(data => {
            setCharacters(data);
            ls.set("characters", data);
            });
        }
    });

    const updateName = (value) => {
        setName(value);
    };

    const updateHouse = (value) => {
        setHouse(value);
    };
    
    return (
        <>
            <Header />
            <div>
                <h1 className="title">Find your favourite character</h1>
            </div>
            <Filters
                name={name}
                house={house}
                updateName={updateName}
                updateHouse={updateHouse}
            />
            <CharacterList
                characters={characters} 
                name={name}
                house={house}
            />
        </>
    )
    };

export default HomePage;