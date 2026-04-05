import { useState } from 'react';
import { sculptureList } from './data.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setShowMore(false);
    setIndex((index + 1) % sculptureList.length);
  }
  function handlePreviousClick() {
    setShowMore(false);
    setIndex(prev => (prev - 1 + 12) % 12);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handlePreviousClick}>
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
        style={{ width: "400px", height: "400px" }} 
      />
    </>
  );
}
