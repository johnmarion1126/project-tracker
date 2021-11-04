import React from 'react';

const WorkItem = ({
  item, deleteWorkItem, moveWorkItem, state,
}) => (
  <div className="work-item">
    <h4 className="work-title">
      <span className="item-info">{item.title}</span>
      <span>
        <button
          type="button"
          className="item-btn"
          onClick={() => deleteWorkItem(item.id)}
        >
          -
        </button>
        { state !== 'Done'
          ? (
            <button
              type="button"
              className="item-btn"
              onClick={() => moveWorkItem(item)}
            >
              {'>'}
            </button>
          )
          : null}
      </span>
    </h4>
  </div>
);

export default WorkItem;
