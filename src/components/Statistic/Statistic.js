import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Good:&#160;</span>
          {good}
        </li>
        <li className={s.item}>
          <span>Neutral:&#160;</span>
          {neutral}
        </li>
        <li className={s.item}>
          <span>Bad:&#160;</span>
          {bad}
        </li>
        <li className={s.item}>
          <span>Total:&#160;</span>
          {total}
        </li>
        <li className={s.item}>
          <span>Positive:&#160;</span>
          {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
