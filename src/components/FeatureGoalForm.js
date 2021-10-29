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
      </form>
      )}
    </>
  );
};

export default FeatureGoalForm;

// TODO: Add styling to form
// TODO: Save user input as titles for feature goals
