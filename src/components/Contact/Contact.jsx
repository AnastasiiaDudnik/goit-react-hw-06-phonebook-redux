import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteNumber } from 'redux/actions';
import { ListButton } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = dispatch(deleteNumber(id));

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <ListButton type="button" onClick={handleDelete}>
        Delete
      </ListButton>
    </>
  );
};

Contact.PropType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
