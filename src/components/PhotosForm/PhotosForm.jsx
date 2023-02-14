import { Component } from 'react';

export class PhotosForm extends Component {
  state = {
    query: '',
  };

  hendleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <input
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.hendleInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
