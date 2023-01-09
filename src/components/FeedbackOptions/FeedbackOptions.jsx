import PropTypes from 'prop-types';
import { Button } from '../FeedbackOptions/FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => {
    return (
      <Button key={option} onClick={() => onLeaveFeedback(option)} type="button">
        {capitalizeFirstLetter(option)}
            </Button>
         );
  });
};

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,

};