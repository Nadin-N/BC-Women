import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { BlogCard } from './BlogCard/BlogCard';
import { Points } from './Points/Points';
import article from 'data/article.json';
import { Friends } from './Friends/Friends';
import { Photos } from './Photos/Photos';
import { Navbar } from './Navbar/Navbar';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { refreshUser } from 'redux/user/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          index
          element={
            <BlogCard
              poster={article.poster}
              tag={article.tag}
              title={article.title}
              description={article.description}
              userName={article.name}
              avatar={article.avatar}
              postedAt={article.postedAt}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/points" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/points" component={<Login />} />
          }
        />
        <Route
          path="/points"
          element={<PrivateRoute redirectTo="/login" component={<Points />} />}
        />
        <Route
          path="/friends"
          element={<PrivateRoute redirectTo="/login" component={<Friends />} />}
        />
        <Route
          path="/photos"
          element={<PrivateRoute redirectTo="/login" component={<Photos />} />}
        />
      </Route>
    </Routes>
  );
};
