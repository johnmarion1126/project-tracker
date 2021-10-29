import React, { useState } from 'react';

const FeatureGoalForm = ({ isAdding, addFeatureGoal }) => {
  const [data, setData] = useState('');

  const changeValue = (event) => {
    setData(event.target.value);
  };

  const submitFeature = () => {
    addFeatureGoal();
    setData('');
  };

  return (
    <>
      { isAdding
      && (
      <form>
        <input
          className="feature-goal-form"
          type="text"
          value={data}
          onChange={changeValue}
        />
        <button
          className="submit-btn"
          type="button"
          onClick={submitFeature}
        >
          +
        </button>
      </form>
      )}
    </>
  );
};

export default FeatureGoalForm;
