import React, { useState } from 'react';

// Components
import WorkItem from './WorkItem';
import WorkItemForm from './WorkItemForm';

// Utils
import { addItem, deleteItem } from '../utils/ItemManager';

const FeatureGoal = ({ item, deleteFeatureGoal }) => {
  const [work, setWork] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const exitAdding = () => {
    setIsAdding(false);
  };

  const addWorkItem = (title) => {
    setWork((prevWork) => addItem(prevWork, title));
    exitAdding();
  };

  const deleteWorkItem = (id) => {
    setWork((prevWork) => deleteItem(prevWork, id));
  };

  const workItems = work.slice(0).reverse().map(
    (val) => (
      <WorkItem
        key={val.id}
        item={val}
        deleteWorkItem={deleteWorkItem}
      />
    ),
  );

  return (
    <div className="feature-goal">
      <h4 className="title feature-title">
        {item.title}
        <span>
          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteFeatureGoal(item.id)}
          >
            -
          </button>
          <button
            className="add-btn"
            type="button"
            onClick={() => setIsAdding(true)}
          >
            +
          </button>

        </span>
      </h4>
      <WorkItemForm
        isAdding={isAdding}
        addWorkItem={addWorkItem}
        exitAdding={exitAdding}
      />
      {workItems}
    </div>
  );
};

export default FeatureGoal;
