import PropTypes from 'prop-types';

class Pizza extends Component {
  static propTypes = {
    cheese: PropTypes.string.isRequired,
    meat: PropTypes.number.isRequired,
    onion: PropTypes.object, 
  };
}