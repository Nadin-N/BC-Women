import { Loader } from 'components/Loader/Loader';
import { PhotosForm } from 'components/PhotosForm/PhotosForm';
import React, { Component } from 'react';
import { fetchPhotosByQuery } from 'services/api';

export class Photos extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: '',
    page: 1,
    showLoadMore: false,
    query: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { photos, total_results } = await fetchPhotosByQuery(query, page);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          showLoadMore: page < Math.ceil(total_results / 12),
        }));
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmit = query => {
    this.setState({
      query,
      photos: [],
      isloading: false,
      error: '',
      page: 1,
      showLoadMore: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { photos, showLoadMore, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <PhotosForm onSubmit={this.onSubmit} />
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {photos.map(({ id, alt, src }) => (
            <li key={id}>
              <img src={src.small} alt={alt} />
            </li>
          ))}
        </ul>
        {showLoadMore && (
          <button type="button" onClick={this.handleLoadMore}>
            Load More
          </button>
        )}
      </>
    );
  }
}
