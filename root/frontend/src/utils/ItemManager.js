import uniqid from 'uniqid';

// API
import { updateStage, deleteStage } from '../api/StageAPIs';

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

export { addItem, deleteItem };
