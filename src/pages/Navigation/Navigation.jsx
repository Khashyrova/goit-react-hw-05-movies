import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navLinks}>
      <NavLink
        to="/"
        className={styles.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#daa520',
              }
            : { color: '#808080' }
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#daa520',
              }
            : { color: '#808080' }
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
