import uniqid from 'uniqid';

const addItem = (itemArray, title, newItem = null) => itemArray.concat({
  id: uniqid(),
  title,
  newItem,
});

const deleteItem = (itemArray, id) => itemArray.filter((item) => item.id !== id);

export { addItem, deleteItem };
