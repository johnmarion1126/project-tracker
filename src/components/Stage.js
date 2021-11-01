import React, { useState } from 'react';

// Components
import FeatureGoal from './FeatureGoal';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../utils/ItemManager';

const Stage = ({ name }) => {
  const [feature, setFeature] = useState([]);
  const [isAddingFeature, setIsAddingFeature] = useState(false);

  const exitAdding = () => {
    setIsAddingFeature(false);
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
