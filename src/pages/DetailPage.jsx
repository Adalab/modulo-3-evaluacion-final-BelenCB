import 'react';
import { useParams, Link } from "react-router-dom";
import ls from "../services/localStorage";
import Header from '../components/Header';
import CharacterDetail from '../components/CharacterDetail';
import '../styles/DetailPage.css';

const DetailPage = () => {

  const { id } = useParams();
  const characters = ls.get("characters", []);
  const character = characters.find(character => character.id === id);

  return (
    <>
        <Header />

        {character ? (
          <>
            <CharacterDetail character={character} />
            <Link to="/">Back to home</Link>
          </>
        ) : (
          <>
            <p className='not-found-text'>Sorry muggle, the character you're looking for doesn't exist in the wizarding world</p>
            <Link to="/">Back to home</Link>
          </>
        )} 
    </>
  )
};

export default DetailPage;