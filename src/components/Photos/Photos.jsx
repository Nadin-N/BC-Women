import { Loader } from 'components/Loader/Loader';
import { PhotosForm } from 'components/PhotosForm/PhotosForm';
import { useState, useEffect } from 'react';
import { fetchPhotosByQuery } from 'services/api';

export function Photos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    const getPhotos = async () => {
      setIsLoading(true);
      try {
        const { photos, total_results } = await fetchPhotosByQuery(query, page);
        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }

        setPhotos(prevState => [...prevState, ...photos]);
        setShowLoadMore(page < Math.ceil(total_results / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [page, query]);

  const onSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setIsLoading(false);
    setIsEmpty(false);
    setError('');
    setPage(1);
    setShowLoadMore(false);
  };

  const loadMorePhotos = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <PhotosForm onSubmit={onSubmit} />
      {isEmpty ? (
        <p>No photos found</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {photos.map(({ id, alt, src }) => (
            <li key={id}>
              <img src={src.small} alt={alt} />
            </li>
          ))}
        </ul>
      )}

      {showLoadMore && (
        <button type="button" onClick={loadMorePhotos}>
          Load More
        </button>
      )}
      {error && <p>Error{error}</p>}
    </>
  );
}
