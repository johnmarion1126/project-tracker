/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from 'react';

// Components
import WorkItem from './WorkItem';
import Form from './Form';

// Utils
import { addItem, deleteItem } from '../../utils/ItemManager';
import { ItemContext } from '../../utils/ItemContext';

// API
import { getFeatureGoal } from '../../api/StageAPIs';

const FeatureGoal = ({
  feature, deleteFeatureGoal, state, newItem,
}) => {
  const [workItem, setWorkItem] = useState([]);
  const [isAddingWorkItem, setIsAddingWorkItem] = useState(false);
  const itemContext = useContext(ItemContext);

  useEffect(async () => {
    const savedItems = await getFeatureGoal(state, feature.title);
    if (savedItems.length > 0) setWorkItem(savedItems[0].items);
  }, []);

  const exitAdding = () => {
    setIsAddingWorkItem(false);
  };

  const addWorkItem = (title) => {
    setWorkItem((prevWork) => addItem(prevWork, title, feature.title));
    exitAdding();
  };

  const deleteWorkItem = (id) => {
    setWorkItem((prevWork) => deleteItem(prevWork, id, feature.title));
  };

  useEffect(() => {
    if (newItem !== null && newItem !== undefined) addWorkItem(newItem.title);
  }, [newItem]);

  const moveWorkItem = (movedItem) => {
    let moveToNewStage;
    if (state === 'To-do') moveToNewStage = itemContext.inProgress[1];
    else if (state === 'In progress') moveToNewStage = itemContext.done[1];

    moveToNewStage((prevItem) => {
      if (prevItem.some((val) => val.title === feature.title)) {
        const updatedFeatures = prevItem.map((val) => {
          if (val.title === feature.title) {
            return {
              ...val,
              newItem: movedItem,
            };
          }
          return val;
        });
        return updatedFeatures;
      }
      return addItem(prevItem, feature.title, feature.title, movedItem);
    });

    deleteWorkItem(movedItem.id);
    if (workItem.length === 1) deleteFeatureGoal(feature.id);
  };

  const workItems = workItem.slice(0).reverse().map(
    (val) => (
      <WorkItem
        key={val.id}
        item={val}
        deleteWorkItem={deleteWorkItem}
        moveWorkItem={moveWorkItem}
        state={state}
      />
    ),
  );

  return (
    <div className="feature-goal">
      <h4 className="title feature-title">
        <span className="item-info">{feature.title}</span>
        <span>
          <button
            type="button"
            className="item-btn"
            onClick={() => deleteFeatureGoal(feature.id, feature.title)}
          >
            -
          </button>
          { state === 'To-do'
            ? (
              <button
                className="add-btn"
                type="button"
                onClick={() => setIsAddingWorkItem(true)}
              >
                +
              </button>
            )
            : null}
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
