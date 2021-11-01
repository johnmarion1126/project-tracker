import React from 'react';

const WorkItem = ({ item, deleteWorkItem }) => (
  <div className="work-item">
    <h4 className="work-title">
      {item.title}
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteWorkItem(item.id)}
      >
        -
      </button>
    </h4>
  </div>
);

export default WorkItem;

// TODO: Move feature and work items from stage to stage
// TODO: Add a description for work item
