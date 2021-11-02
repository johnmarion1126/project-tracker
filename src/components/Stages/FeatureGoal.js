import React, { useState, useContext, useEffect } from 'react';

// Components
import WorkItem from './WorkItem';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../../utils/ItemManager';
import { ItemContext } from '../../utils/ItemContext';

const FeatureGoal = ({
  item, deleteFeatureGoal, state, newItem,
}) => {
  const [workItem, setWorkItem] = useState([]);
  const [isAddingWorkItem, setIsAddingWorkItem] = useState(false);
  const itemContext = useContext(ItemContext);

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

  useEffect(() => {
    if (newItem !== null) addWorkItem(newItem.title);
  }, [newItem]);

  const moveWorkItem = (movedItem) => {
    let moveToNewStage;
    if (state === 'To-do') moveToNewStage = itemContext.inProgress[1];
    else if (state === 'In progress') moveToNewStage = itemContext.done[1];

    moveToNewStage((prevItem) => {
      if (prevItem.some((val) => val.title === item.title)) {
        const updatedFeatures = prevItem.map((val) => {
          if (val.title === item.title) {
            return {
              ...val,
              newItem: movedItem,
            };
          }
          return val;
        });
        return updatedFeatures;
      }
      return addItem(prevItem, item.title, movedItem);
    });

    deleteWorkItem(movedItem.id);
    if (workItem.length === 1) deleteFeatureGoal(item.id);
  };

  const workItems = workItem.slice(0).reverse().map(
    (val) => (
      <WorkItem
        key={val.id}
        item={val}
        deleteWorkItem={deleteWorkItem}
        moveWorkItem={moveWorkItem}
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
            className="item-btn"
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