import { useState, useEffect } from 'react';
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

export function FriendList() {
 
  const [friends, setFriends] = useState(() => storage.load('friends-list') ?? FRIENDS);
  const [filter, setFilter] = useState('');

 

  useEffect(() => {
    storage.save('friends-list', friends);
  }, [friends]) 


  const addFfiend = friend => {
    const isExist = friends.find(({ name }) => {
      return friend.name === name;
    });
    if (isExist) {
      alert('This friend is existed!!!!');
      return;
    }
    setFriends(prevState => 
       [...prevState, { ...friend, id: nanoid() }] 
    );
  };
  const handleFilter = ({ target: { value } }) => {
    setFilter( value );
  };

  const getFilteredFriends = () => {
    const normaliseFilter = filter.trim().toLowerCase();
    return friends.filter(friend => {
      return friend.name.toLowerCase().includes(normaliseFilter);
    });
  };
  
  const deleteFriend = id => {
    setFriends(prevState =>  prevState.filter(friend => friend.id !== id))
  };

 
    
    const filteredFriends = getFilteredFriends();
    return (
      <>
        <h2>Friend-list</h2>
        <FriendForm onSubmit={addFfiend} />
        <div>
          <h3>Filter friends</h3>
          <input onChange={handleFilter} />
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
                  <button onClick={() => deleteFriend(id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
}
