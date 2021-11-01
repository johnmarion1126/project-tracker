import React, { useState } from 'react';

// Components
import FeatureGoal from './FeatureGoal';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../utils/ItemManager';

const Stage = ({ name, currentStage }) => {
  const [isAddingFeature, setIsAddingFeature] = useState(false);
  const [item, setItem] = currentStage;

  const exitAdding = () => {
    setIsAddingFeature(false);
  };

  const addFeatureGoal = (title) => {
    setItem((prevFeature) => addItem(prevFeature, title));
    exitAdding();
  };

  const deleteFeatureGoal = (id) => {
    setItem((prevFeature) => deleteItem(prevFeature, id));
  };

  const features = item.slice(0).reverse().map(
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
          onClick={() => setIsAddingFeature(true)}
        >
          +
        </button>
      </h4>
      <Form
        isAdding={isAddingFeature}
        addItem={addFeatureGoal}
        exitAdding={exitAdding}
      />
      {features}
    </div>
  );
};

export default Stage;
