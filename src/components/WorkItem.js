import React from 'react';

const WorkItem = ({ item, deleteWorkItem, moveWorkItem }) => (
  <div className="work-item">
    <h4 className="work-title">
      {item.title}
      <span>
        <button
          type="button"
          className="item-btn"
          onClick={() => deleteWorkItem(item.id)}
        >
          -
        </button>
        <button
          type="button"
          className="item-btn"
          onClick={() => moveWorkItem(item)}
        >
          {'>'}
        </button>
      </span>
    </h4>
  </div>
);

export default WorkItem;

// TODO: Add a description for work item
