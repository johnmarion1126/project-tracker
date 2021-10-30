import React, { useState } from 'react';
import uniqid from 'uniqid';

// Components
import FeatureGoal from './FeatureGoal';
import FeatureGoalForm from './FeatureGoalForm';

import ExampleContext from '../context/example';
import Test from './TestComponent';

const Stage = ({ name }) => {
  const [feature, setFeature] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  // ================================================
  const sayHello = () => {
    console.log('Hello');
  };

  const sayBye = () => {
    console.log('Bye');
  };

  // ================================================

  const exitAdding = () => {
    setIsAdding(false);
  };

  const addFeatureGoal = (title) => {
    setFeature((prevFeature) => {
      const updatedFeature = prevFeature.concat({
        id: uniqid(),
        title,
      });
      return updatedFeature;
    });
    exitAdding();
  };

  const deleteFeatureGoal = (id) => {
    setFeature((prevFeature) => {
      const updatedFeature = prevFeature.filter((item) => item.id !== id);
      return updatedFeature;
    });
  };

  const features = feature.slice(0).reverse().map(
    (item) => (
      <FeatureGoal
        key={item.id}
        item={item}
        deleteFeatureGoal={deleteFeatureGoal}
      />
    ),
  );

  return (
    <div className="stage">
      <h4 className="title">
        {name}
        <button
          className="add-btn"
          type="button"
          onClick={() => setIsAdding(true)}
        >
          +
        </button>
      </h4>
      <FeatureGoalForm
        isAdding={isAdding}
        addFeatureGoal={addFeatureGoal}
        exitAdding={exitAdding}
      />
      {features}
      <ExampleContext.Provider value={[sayHello, sayBye]}>
        <Test />
      </ExampleContext.Provider>
    </div>
  );
};

export default Stage;
