import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
   return (
      <nav className="linkList">
         <NavLink exact to={routes.home} className="navLink" activeClassName="navLink__active">
            Home Page
         </NavLink>

         <NavLink exact to={routes.movies} className="navLink" activeClassName="navLink__active">
            Search Movie
         </NavLink>
      </nav>
   );
};
export default Navigation;
