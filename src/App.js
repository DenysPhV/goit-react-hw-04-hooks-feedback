import { useState } from 'react';

import Section from './components/Section';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  // const options = Object.keys({ good, neutral, bad });

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100,
  );

  const increment = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;

      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;

      case 'bad':
        setBad((prevState) => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={increment} />
      </Section>

      {countTotalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
// class App extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   increment = (value) => () => {
//     this.setState((prevState) => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);

//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good / countTotalFeedback) * 100,
//     );

// return (
//   <div className={s.container}>
//     <Section title="Please leave feedback">
//       <FeedbackOptions options={options} onLeaveFeedback={this.increment} />
//     </Section>

//     {countTotalFeedback > 0 ? (
//       <Section title="Statistics">
//         <Statistic
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback}
//           positiveFeedback={countPositiveFeedbackPercentage}
//         />
//       </Section>
//     ) : (
//       <Notification message="No feedback given" />
//     )}
//   </div>
// );
//   }
// }

// export default App;
