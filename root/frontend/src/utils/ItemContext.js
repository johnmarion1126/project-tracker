import React, { useState, createContext } from 'react';

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const itemStates = {
    todo: [todoItems, setTodoItems],
    inProgress: [inProgressItems, setInProgressItems],
    done: [doneItems, setDoneItems],
  };

  return (
    <ItemContext.Provider value={itemStates}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
