import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const  countTotalFeedback = () => {
    const values = Object.values([good, neutral, bad]);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const leaveFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(prevGood => prevGood + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);
      default:
        throw new Error('Unexpected value of option');
    }
  };

  const  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total, good);
  return (
  <div style={{ margin: '40px', }} >
                
                  <Section title="Please leave feedback"></Section>
                 <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback}></FeedbackOptions>
             <h2>Statistics</h2>
             {total === 0 ? <Notification message={"There is no feedback"} /> :
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentage={positivePercentage}
              />}
            </div >
)
  };



  


//   countPositiveFeedbackPercentage = (total, good) => {
//     const percentage = Math.round((good / total) * 100);
//     return percentage;
//   };

//     render() {
//       const { good, neutral, bad } = this.state;
//       const total = this.countTotalFeedback();
//       const options = Object.keys(this.state);
//       const positivePercentage = this.countPositiveFeedbackPercentage(total, good);
//         return (
//         <div style={{ margin: '40px', }} >
                
//                  <Section title="Please leave feedback"></Section>
//                 <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback}></FeedbackOptions>
                
//             <h2>Statistics</h2>
//             {total === 0 ? <Notification message={"There is no feedback"} /> :
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 percentage={positivePercentage}
//               />}
//             </div >
//         )
//     }
// }