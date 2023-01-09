import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App  extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };
  
  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const options = Object.keys(this.state);
      const positivePercentage = this.countPositiveFeedbackPercentage(total, good);
        return (
        <div style={{ margin: '40px', }} >
                
                 <Section title="Please leave feedback"></Section>
                <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback}></FeedbackOptions>
                
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
    }
}