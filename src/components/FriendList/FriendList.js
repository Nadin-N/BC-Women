import { Component } from 'react';
import storage from 'helpers/storage';
import { FriendForm } from '../FriendForm/FriendForm';
import { nanoid } from 'nanoid';

const FRIENDS = [
  {
    name: 'Мария',
    lastname: 'Акименко',
    email: 'dafnarianna@gmail.com',
    number: '+30565',
    id: 'POi8Jktn9YUPC5wkkyovs',
  },
  {
    name: 'fdsdfsddsfs',
    lastname: 'Акименко',
    email: 'dafnarianna@gmail.com',
    number: 'dafnarianna@gmail.com',
    id: '0Hp1-0Asd5qcnmjjV-bLJ',
  },
  {
    name: 'fdgfgfjnfg',
    lastname: 'Акименко',
    email: 'dafnarianna@gmail.com',
    number: 'dafnarianna@gmail.com',
    id: '8iv5F6-LOdo_CiiIQefef',
  },
];

export class FriendList extends Component {
  state = {
    friends: [],
    filter: '',
  };

  componentDidMount() {
    const savedFriends = storage.load('friends-list') ?? FRIENDS;
    this.setState({ friends: savedFriends });
  }

  componentDidUpdate(_, prevState) {
    const { friends } = this.state;
    if (prevState.friends !== friends) {
      storage.save('friends-list', friends);
      console.log(friends);
    }
  }

  addFfiend = friend => {
    const isExist = this.state.friends.find(({ name }) => {
      return friend.name === name;
    });
    if (isExist) {
      alert('This friend is existed!!!!');
      return;
    }
    this.setState(prevState => {
      return { friends: [...prevState.friends, { ...friend, id: nanoid() }] };
    });
  };
  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  getFilteredFriends = () => {
    const { friends, filter } = this.state;
    const normaliseFilter = filter.trim().toLowerCase();
    return friends.filter(friend => {
      return friend.name.toLowerCase().includes(normaliseFilter);
    });
  };
  deleteFriend = id => {
    this.setState(prevState => {
      return { friends: prevState.friends.filter(friend => friend.id !== id) };
    });
  };

  render() {
    const { friends } = this.state;
    const filteredFriends = this.getFilteredFriends();
    return (
      <>
        <h2>Friend-list</h2>
        <FriendForm onSubmit={this.addFfiend} />
        <div>
          <h3>Filter friends</h3>
          <input onChange={this.handleFilter} />
        </div>

        {friends.length > 0 && (
          <ul>
            {filteredFriends.map(({ name, lastname, email, number, id }) => {
              return (
                <li key={name}>
                  <span>Name: {name}</span>
                  <span>Surname: {lastname}</span>
                  <span>Email: {email}</span>
                  <span>Phone-number: {number}</span>
                  <button onClick={() => this.deleteFriend(id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
