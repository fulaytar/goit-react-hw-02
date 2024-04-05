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

  function updateFeedback() {
    
  }


  return (
    <>
      <Description />
      <Options Options={updateFeedback} />
      <Feedback Options={updateFeedback} />
    </>
  )
}
