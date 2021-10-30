import React, { useState } from 'react';

// Components
// eslint-disable-next-line no-unused-vars
import FeatureGoal from './FeatureGoal';
import FeatureGoalForm from './FeatureGoalForm';

const Stage = ({ name }) => {
  const [isAdding, setIsAdding] = useState(false);

  const exitAdding = () => {
    setIsAdding(false);
  };
  const addFeatureGoal = () => {
    exitAdding();
  };

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
    </div>
  );
};

export default Stage;

// TODO: Create map for feature goals
