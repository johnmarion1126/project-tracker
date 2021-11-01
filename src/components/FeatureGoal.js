import React, { useState } from 'react';

// Components
import WorkItem from './WorkItem';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../utils/ItemManager';

const FeatureGoal = ({ item, deleteFeatureGoal }) => {
  const [workItem, setWorkItem] = useState([]);
  const [isAddingWorkItem, setIsAddingWorkItem] = useState(false);

  const exitAdding = () => {
    setIsAddingWorkItem(false);
  };

  const addWorkItem = (title) => {
    setWorkItem((prevWork) => addItem(prevWork, title));
    exitAdding();
  };

  const deleteWorkItem = (id) => {
    setWorkItem((prevWork) => deleteItem(prevWork, id));
  };

  const workItems = workItem.slice(0).reverse().map(
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
            onClick={() => setIsAddingWorkItem(true)}
          >
            +
          </button>

        </span>
      </h4>
      <Form
        isAdding={isAddingWorkItem}
        addItem={addWorkItem}
        exitAdding={exitAdding}
      />
      {workItems}
    </div>
  );
};

export default FeatureGoal;
