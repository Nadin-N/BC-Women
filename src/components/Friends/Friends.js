import { FriendForm } from '../FriendForm/FriendForm';
import { FriendsList } from 'components/FriendsList/FriendList';
import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function Friends() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Friend-list</h2>
      <FriendForm />
      <div>
        <h3>Filter friends</h3>
        <input onChange={event => dispatch(addFilter(event.target.value))} />
      </div>

      <FriendsList />
    </>
  );
}
