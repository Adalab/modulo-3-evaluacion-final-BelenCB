import 'react';
import HPBanner from '../images/hp-banner.jpg';

const Header = () => {
    return (
        <div className="header-container">
            <img className="header-image" src={HPBanner} alt="Imagen de los principales personajes de Harry Potter luchando con varitas" />
        </div>
    );
};

export default Header;