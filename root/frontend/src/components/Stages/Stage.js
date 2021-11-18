import React, { useState, useEffect } from 'react';

// Components
import FeatureGoal from './FeatureGoal';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../../utils/ItemManager';

// API
import { getStage, createStage, deleteAllItems } from '../../api/StageAPIs';

const Stage = ({ name, currentStage }) => {
  const [isAddingFeature, setIsAddingFeature] = useState(false);
  const [item, setItem] = currentStage;

  useEffect(async () => {
    const savedItems = await getStage(name);
    if (savedItems.length === 0) {
      const newStageArray = {
        name,
        items: [],
      };
      createStage(newStageArray);
      setItem([]);
    } else {
      setItem(savedItems[0].items);
    }
  }, []);

  const exitAdding = () => {
    setIsAddingFeature(false);
  };

  const addFeatureGoal = (title) => {
    setItem((prevFeature) => addItem(prevFeature, title, name));
    exitAdding();
  };

  const deleteFeatureGoal = (id, title) => {
    setItem((prevFeature) => deleteItem(prevFeature, id, name));
    deleteAllItems(title);
  };

  const features = item.slice(0).reverse().map(
    (val) => (
      <FeatureGoal
        key={val.id}
        feature={val}
        deleteFeatureGoal={deleteFeatureGoal}
        state={name}
        newItem={val.newItem}
      />
    ),
  );

  return (
    <div className="stage">
      <h4 className="title stage-title">
        {name}
        {
          name === 'To-do'
            ? (
              <button
                className="add-btn"
                type="button"
                onClick={() => setIsAddingFeature(true)}
              >
                +
              </button>
            ) : null
}
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
