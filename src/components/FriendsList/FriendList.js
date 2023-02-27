import { useSelector } from 'react-redux';
import { getFilteredFriends } from 'redux/selectors';
import{deleteFriends} from 'redux/operations';

import { useDispatch } from 'react-redux';


export const FriendsList = () => {
  const friends = useSelector(getFilteredFriends);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFriends(id));
  };
  


  return (
    <ul>
      {friends.map(({ name, lastname, email, number, id, avatar }) => {
        return (
          <li key={name}>
            <img src={avatar}  alt={name}/>
            <span>Name: {name}</span>
            <span>Surname: {lastname}</span>
            <span>Email: {email}</span>
            <span>Phone-number: {number}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
