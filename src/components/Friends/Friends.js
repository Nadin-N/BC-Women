import { FriendForm } from '../FriendForm/FriendForm';
import { FriendsList } from 'components/FriendsList/FriendList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFriends } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getIsloading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export function Friends() {
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <h2>Friend-list</h2>
      <FriendForm />
      <Filter />

      <FriendsList />
    </>
  );
}
