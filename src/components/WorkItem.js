import React from 'react';

const WorkItem = ({
  // eslint-disable-next-line no-unused-vars
  item, deleteWorkItem, moveWorkItem, feature,
}) => (
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
          onClick={() => moveWorkItem()}
        >
          {'>'}
        </button>
      </span>
    </h4>
  </div>
);

export default WorkItem;

// TODO: Move feature and work items from stage to stage
// TODO: Add a description for work item
