
import PropTypes from 'prop-types'; 
import { Loader } from '../Loader';

export const Button = ({ onClick, loading }) => {
  return (
    <button type="button" onClick={onClick}>
      {!loading ? (
        'Load more'
      ) : (
        <Loader/>
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
loading: PropTypes.bool.isRequired,
}