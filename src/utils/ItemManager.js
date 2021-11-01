import uniqid from 'uniqid';

const addItem = (itemArray, title) => itemArray.concat({
  id: uniqid(),
  title,
});

const deleteItem = (itemArray, id) => itemArray.filter((item) => item.id !== id);

export { addItem, deleteItem };
