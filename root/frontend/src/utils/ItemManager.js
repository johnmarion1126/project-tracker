import uniqid from 'uniqid';

// API
import { updateStage } from '../api/StageAPIs';

const addItem = (itemArray, title, name, newItem = null) => {
  const item = {
    id: uniqid(),
    title,
  };

  const updatedArray = itemArray.concat({
    id: item.id,
    title,
    newItem,
  });

  // eslint-disable-next-line no-console
  console.log('CALLING API');
  updateStage(name, item);

  return updatedArray;
};

const deleteItem = (itemArray, id) => itemArray.filter((item) => item.id !== id);

export { addItem, deleteItem };
