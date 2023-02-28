import { Routes, Route } from "react-router-dom";
import { BlogCard } from './BlogCard/BlogCard';
import { Points } from './Points/Points';
import article from 'data/article.json';
import { Friends } from './Friends/Friends';
import { Photos } from './Photos/Photos';
import {Navbar } from './Navbar/Navbar';
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route index element={<BlogCard
            poster={article.poster}
            tag={article.tag}
            title={article.title}
            description={article.description}
            userName={article.name}
            avatar={article.avatar}
            postedAt={article.postedAt}
          />}/>
          <Route path="/points" element={<Points/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/photos" element={<Photos/>}/>
      </Route>
    </Routes>
   
  );
};
