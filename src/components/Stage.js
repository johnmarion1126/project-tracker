import React from 'react';

// Components
// eslint-disable-next-line no-unused-vars
import FeatureGoal from './FeatureGoal';

const Stage = ({ name }) => (
  <div className="stage">
    <h4 className="title">
      {name}
      <button className="add-btn" type="button">+</button>
    </h4>
  </div>
);

export default Stage;
