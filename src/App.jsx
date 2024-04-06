import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState,useEffect } from 'react';

export default function App() {
  
  const [count, setCount] = useState(
    () => {
      const saveFeedback = localStorage.getItem('saveFeedback');
      return saveFeedback !== null ? JSON.parse(saveFeedback) :
        {
  good: 0,
	neutral: 0,
	bad: 0
    } ;
    }
  );
  let totalFeedback = count.good + count.neutral + count.bad || 0;
  let positiveTotal = Math.round((count.good / totalFeedback) * 100)||0;

  const updateFeedback= (key)=> {
        setCount({
        ...count,
          [key]: count[key] + 1,
      })
  }

  const resetFeedback = () => {
    setCount({
  good: 0,
	neutral: 0,
	bad: 0
    })
  }

  useEffect(() => { localStorage.setItem('saveFeedback', JSON.stringify(count)) }, [count]);

  return (
    <>
      <Description />
      <Options options={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      { totalFeedback>0?<Feedback options={count} totalFeedback={totalFeedback} positiveTotal={positiveTotal} />:<Notification />}
      
    </>
  )
}
