import React from 'react';

// Components
import FeatureGoal from './FeatureGoal';

const Stage = ({ name }) => (
  <div className="stage">
    <h4 className="title">{name}</h4>
    <FeatureGoal />
  </div>
);

export default Stage;
