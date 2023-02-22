import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFriend } from 'redux/friendsSlice';
import { nanoid } from 'nanoid';
import { getFriends } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function FriendForm({ onSubmit }) {
  const dispatch = useDispatch();
  const friends = useSelector(getFriends);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
    setName('');
    setLastname('');
    setEmail('');
    setNumber('');
  };
  const handleSubmit = event => {
    event.preventDefault();

    const isExist = friends.find(friend => {
      return friend.name === name;
    });
    if (isExist) {
      alert('This friend is existed!!!!');
      return;
    }

    dispatch(addFriend({ name, lastname, email, number, id: nanoid() }));

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={inputChange} value={name} name="name" />
      <input onChange={inputChange} value={lastname} name="lastname" />
      <input onChange={inputChange} value={email} name="email" />
      <input onChange={inputChange} value={number} name="number" />
      <button type="submit">Submit</button>
    </form>
  );
}
