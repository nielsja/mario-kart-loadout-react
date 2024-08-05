import logo from '../../assets/mario-kart-8-deluxe-logo.png';
import './AppHeader.css';

function AppHeader() {
  return (
    <>
      <img className="header-logo-image" src={`./${logo}`}></img>
      <span className="header-logo-text">LOADOUT BUILDER</span>
    </>
  );
}

export default AppHeader;
