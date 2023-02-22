import { useSelector } from 'react-redux';
import { getFilteredFriends } from 'redux/selectors';
import { deleteFriend } from 'redux/friendsSlice';
import { useDispatch } from 'react-redux';

export const FriendsList = () => {
  const friends = useSelector(getFilteredFriends);
  const dispatch = useDispatch();

  return (
    <ul>
      {friends.map(({ name, lastname, email, number, id }) => {
        return (
          <li key={name}>
            <span>Name: {name}</span>
            <span>Surname: {lastname}</span>
            <span>Email: {email}</span>
            <span>Phone-number: {number}</span>
            <button onClick={() => dispatch(deleteFriend(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
