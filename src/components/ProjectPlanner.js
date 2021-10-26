import React from 'react';

// Components
import Stage from './Stage';

const ProjectPlanner = () => (
  <div className="project-div planner">
    <Stage name="To-do" />
    <Stage name="In progress" />
    <Stage name="Done" />
  </div>
);

export default ProjectPlanner;
