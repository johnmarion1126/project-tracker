import React from 'react';

// Components
// eslint-disable-next-line no-unused-vars
import WorkItem from './WorkItem';

// eslint-disable-next-line no-unused-vars
const FeatureGoal = ({ item, deleteFeatureGoal }) => (
  <div className="feature-goal">
    <h4 className="title feature-title">
      {item.title}
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteFeatureGoal(item.id)}
      >
        -
      </button>
    </h4>
  </div>
);

export default FeatureGoal;
