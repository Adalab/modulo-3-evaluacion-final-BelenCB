import 'react';
import Header from '../components/Header';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {

  return (
    <>
      <Header />
      <h1 className='not-found-title'>¡Confundus!</h1>
      <p className='not-found-text'>Sorry muggle, the character you're looking for doesn't exist in the wizarding world</p>
    </>
  )
};

export default NotFoundPage;
