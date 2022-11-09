import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <div>
      {total > 0 ? (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercent}%</li>
        </ul>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistic;
