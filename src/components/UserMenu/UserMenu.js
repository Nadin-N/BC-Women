import { NavLink } from 'react-router-dom';
export const UserMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
      <li>
        <NavLink to="register">Register</NavLink>
      </li>
    </ul>
  );
};
