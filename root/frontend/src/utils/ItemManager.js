import uniqid from 'uniqid';

// API
import { updateStage, deleteStage, saveWorkItem } from '../api/StageAPIs';

const addWorkItemToDatabase = (itemArray, title, name, stage) => {
  const item = {
    id: uniqid(),
    title,
  };

  const updatedArray = itemArray.concat({
    id: item.id,
    title,
  });

  saveWorkItem(stage, name, item);
  return updatedArray;
};

const moveWorkItemFromDatabase = (itemArray, item, name, stage) => {
  const updatedArray = itemArray.concat(item);
  saveWorkItem(stage, name, item);
  return updatedArray;
};

const addItem = (itemArray, title, name, newItem) => {
  const item = {
    id: uniqid(),
    title,
  };

  const updatedArray = itemArray.concat({
    id: item.id,
    title,
    newItem,
  });

  updateStage(name, item);
  return updatedArray;
};

const deleteItem = (itemArray, id, name) => {
  const updatedArray = itemArray.filter((item) => item.id !== id);
  deleteStage(name, id);

  return updatedArray;
};

export {
  addItem, deleteItem, addWorkItemToDatabase, moveWorkItemFromDatabase,
};
