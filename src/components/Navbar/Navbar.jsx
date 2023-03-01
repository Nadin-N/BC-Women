import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? <AuthNav /> : <UserMenu />}
      <Outlet />
    </div>
  );
};
