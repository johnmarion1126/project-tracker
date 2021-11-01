import React, { useState, createContext } from 'react';

const ItemsContext = createContext();

const ItemProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [inProgressItems, setInProgessItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const itemStates = {
    todo: [todoItems, setTodoItems],
    inProgess: [inProgressItems, setInProgessItems],
    done: [doneItems, setDoneItems],
  };

  return (
    <ItemsContext.Provider value={itemStates}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemProvider;
