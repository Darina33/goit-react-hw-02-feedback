import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./SectionTitle";
import Notification from "./Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  addFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / (this.state.neutral + this.state.bad + this.state.good)) || 0
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    const countTotalFeedback = this.countTotalFeedback()
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage()

    return <div><Section title="Please leave feedback">
        <FeedbackOptions options={options}
        addFeedback={this.addFeedback} />
      </Section>
      <Section title="Statistics">{countTotalFeedback ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} percentage={countPositiveFeedbackPercentage}/> : <Notification message="There is no feedback"/>}
      </Section>
    </div>
  }
}
