import React, { useState } from 'react';

const Form = ({ isAdding, addItem, exitAdding }) => {
  const [data, setData] = useState('');

  const changeValue = (event) => {
    setData(event.target.value);
  };

  const submitItem = () => {
    addItem(data);
    setData('');
  };

  return (
    <>
      { isAdding
      && (
      <form>
        <input
          className="item-input"
          type="text"
          value={data}
          onChange={changeValue}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitItem();
            }
          }}
        />
        <button
          type="button"
          className="item-btn"
          onClick={exitAdding}
        >
          -
        </button>
      </form>
      )}
    </>
  );
};

export default Form;
