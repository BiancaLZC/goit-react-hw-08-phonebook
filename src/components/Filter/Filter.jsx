import { useDispatch } from 'react-redux';
import { update } from '../../redux/filter/slice';
import { InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const filter = e.currentTarget.value.trim();
    dispatch(update(filter));
  };

  return (
    <>
      <InputLabel htmlFor="outlined-adornment-amount">
        Find contacts by name
      </InputLabel>
      <OutlinedInput
        sx={{
          width: '600px',
          backgroundColor: '#fff',
          marginBottom: '15px',
          marginTop: '10px',
        }}
        type="text"
        name="filter"
        onChange={onChangeFilter}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        labelwidth={60}
      />
    </>
  );
};
export default Filter;