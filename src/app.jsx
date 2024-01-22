import React from 'react';
import { useFetchQuotes } from './useFetchQuotes';
import { Quote } from './quote';

function App() {
  const [index, setIndex] = React.useState(0);
  const { loading, quotes } = useFetchQuotes();

  const clickHandler = () => {
    setIndex((index) => (index + 1) % quotes.length);
  };

  return (
    <>
      {loading && <div>loading...</div>}
      {!loading && <Quote quote={quotes[index]} />}
      <button type="button" onClick={clickHandler}>next</button>
    </>
  );
}

export default App;
