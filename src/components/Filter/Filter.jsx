import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Filter friends</h3>
      <input onChange={event => dispatch(addFilter(event.target.value))} />
    </div>
  );
};
