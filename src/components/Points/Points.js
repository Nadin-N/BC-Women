import { useState } from 'react';

export function Points() {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handelIncrement = (option, value) => {
    setPoints(prevState => ({
      ...prevState,
      [option]: prevState[option] + value,
    }));
  };

  const countPoints = () => {
    return Object.values(points).reduce((acc, item) => acc + item, 0);
  };

  const total = countPoints();

  return (
    <>
      {Object.entries(points).map(([key], index) => {
        return (
          <button key={key} onClick={() => handelIncrement(key, index + 1)}>
            {key}
          </button>
        );
      })}
      <h2>Points:{total}</h2>
    </>
  );
}




  


  
  

 



