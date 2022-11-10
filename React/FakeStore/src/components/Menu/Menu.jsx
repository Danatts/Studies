import { NavLink } from 'react-router-dom';
import './Menu.styles.scss';
import {
  ROUTE_HOME, ROUTE_ABOUT,
} from '../../routes/routes';

function Menu() {
  return (
    <>
      <div className="menu">
        <NavLink to={ROUTE_HOME} className="menu__navlink">HOME</NavLink>
        <NavLink to={ROUTE_ABOUT} className="menu__navlink">ABOUT</NavLink>
      </div>
      <div className="menu__underline" />
    </>
  );
}

export default Menu;
