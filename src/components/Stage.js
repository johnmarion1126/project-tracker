import React, { useState } from 'react';

// Components
import FeatureGoal from './FeatureGoal';

const Stage = ({ name }) => {
  const [isAdding, setIsAdding] = useState(false);

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
      {isAdding && <FeatureGoal />}
    </div>
  );
};

export default Stage;
