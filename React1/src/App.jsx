import { useState} from 'react';

function App() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const [subscribed, setSubscribed] = useState(false);

  const handleLike = () => {
    if (liked) 
    {
      setLiked(false);
    }

    else
    {
      setLiked(true);
    }
  };

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <div>
    <button onClick = {handleLike}>{liked?'Liked':'Like'}</button>
    <button onClick = {handleSubscribe}>{subscribed?'Subscribed':'Subscribe'}</button>
    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>);
  }

  export default App;

