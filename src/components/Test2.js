import React, { useContext } from 'react';
import ExampleContext from '../context/example';

const Test2 = () => {
  const [sayHello, sayBye] = useContext(ExampleContext);
  return (
    <div>
      Test 2
      <button
        type="button"
        onClick={sayHello}
      >
        A
      </button>
      <button
        type="button"
        onClick={sayBye}
      >
        B
      </button>
    </div>

  );
};

export default Test2;
