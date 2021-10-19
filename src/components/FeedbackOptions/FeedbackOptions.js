import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.container}>
      <button
        name="good"
        onClick={onLeaveFeedback}
        type="button"
        className={s.button}
      >
        Good
      </button>

      <button
        name="neutral"
        onClick={onLeaveFeedback}
        type="button"
        className={s.button}
      >
        Neutral
      </button>

      <button
        name="bad"
        onClick={onLeaveFeedback}
        type="button"
        className={s.button}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
