import { Component } from 'react';

export class FriendForm extends Component {
  state = {
    name: '',
    lastname: '',
    email: '',
    number: '',
  };
  inputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };
  resetForm = () => {
    this.setState({ name: '',
    lastname: '',
    email: '',
    number: '',})
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.inputChange}
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.inputChange}
          value={this.state.lastname}
          name="lastname"
        />
        <input
          onChange={this.inputChange}
          value={this.state.email}
          name="email"
        />
        <input
          onChange={this.inputChange}
          value={this.state.number}
          name="number"
        />
        <button  type="submit">Submit</button>
      </form>
    );
  }
}
