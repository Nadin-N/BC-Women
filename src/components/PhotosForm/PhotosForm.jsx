import { useState } from 'react';

export function PhotosForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const hendleInput = ({ target }) => {
    setQuery(target.value);
  };

  const hendleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={hendleSubmit}>
      <input type="text" name="query" value={query} onChange={hendleInput} />
      <button type="submit">Search</button>
    </form>
  );
}
