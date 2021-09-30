import React, { useState } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackButtons/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)


  const btnCklickCounter = (evt) => {
    const btnName = evt.currentTarget.name;
    if(btnName === 'good') {
      setGood(prevBad => prevBad + 1);
      return;
    }
    if(btnName === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
      return;
    }
    if(btnName === 'bad') {
      setBad(prevBad => prevBad + 1);
      return;
    }
  }

  const countTotalFeedback = () => {
    return good + bad + neutral;
  }

  const countPositiveFeedbackPercentage =(total) => {
    total = countTotalFeedback();
    return Math.round((good * 100) / total)
  }

    const positiveFeedbacks = countPositiveFeedbackPercentage();
    const total = countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={btnCklickCounter} />
        </Section>

        <Section title="Statistics">
          {total === 0 ? 
          <Notification message="No feedback given" /> : 
          <Statistics  
            good={good} 
            neutral={neutral}
            bad={bad}
            total={total} 
            positiveFeedbacks={positiveFeedbacks} />}
        </Section>
      </>
    )
}

export default App;
