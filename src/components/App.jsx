import { BlogCard } from './BlogCard/BlogCard';
import article from 'data/article.json';
console.log(article);

export const App = () => {
  return (
    <BlogCard
      poster={article.poster}
      tag={article.tag}
      title={article.title}
      description={article.description}
      userName={article.name}
      avatar={article.avatar}
      postedAt={article.postedAt}
    />
  );
};
