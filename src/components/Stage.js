import React, { useState } from 'react';

// Components
import FeatureGoal from './FeatureGoal';
import FeatureGoalForm from './FeatureGoalForm';

// Utils
import { addItem, deleteItem } from '../utils/ItemManager';

const Stage = ({ name }) => {
  const [feature, setFeature] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const exitAdding = () => {
    setIsAdding(false);
  };

  const addFeatureGoal = (title) => {
    setFeature((prevFeature) => addItem(prevFeature, title));
    exitAdding();
  };

  const deleteFeatureGoal = (id) => {
    setFeature((prevFeature) => deleteItem(prevFeature, id));
  };

  const features = feature.slice(0).reverse().map(
    (val) => (
      <FeatureGoal
        key={val.id}
        item={val}
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
    </div>
  );
};

export default Stage;
