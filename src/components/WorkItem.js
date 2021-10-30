import React from 'react';

const WorkItem = ({ title, description }) => (
  <div className="work-item">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default WorkItem;
