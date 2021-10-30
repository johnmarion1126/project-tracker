import React, { useState } from 'react';

const FeatureGoalForm = ({ isAdding, addFeatureGoal, exitAdding }) => {
  const [data, setData] = useState('');

  const changeValue = (event) => {
    setData(event.target.value);
  };

  const submitFeature = () => {
    addFeatureGoal(data);
    setData('');
  };

  return (
    <>
      { isAdding
      && (
      <form>
        <input
          className="feature-goal-input"
          type="text"
          value={data}
          onChange={changeValue}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitFeature();
            }
          }}
        />
        <button
          type="button"
          className="delete-btn"
          onClick={exitAdding}
        >
          -
        </button>
      </form>
      )}
    </>
  );
};

export default FeatureGoalForm;
