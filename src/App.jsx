import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

export default function App() {
  
  const [count, setCount] = useState(
    {
	good: 0,
	neutral: 0,
	bad: 0
}
  );
  let totalFeedback = count.good + count.neutral + count.bad || 0;
  let positiveTotal = Math.round((count.good / totalFeedback) * 100)||0;

  function updateFeedback(event) {
    if (event.target.textContent ==='Good') {
        setCount({
        ...count,
          good: count.good + 1
      })
    }
    if (event.target.textContent === 'Neutral') {
        setCount({
        ...count,
          neutral: count.neutral + 1,
      })
    }
    if (event.target.textContent === 'Bad') {
        setCount({
        ...count,
        bad: count.bad + 1,
      })
    }
    if (event.target.textContent === 'Reset') {
      totalFeedback = 0;
      setCount({
      good: 0,
      neutral: 0,
      bad: 0
      })
    }
  }


  return (
    <>
      <Description />
      <Options Options={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback Options={count} totalFeedback={totalFeedback} positiveTotal={positiveTotal} />
    </>
  )
}
