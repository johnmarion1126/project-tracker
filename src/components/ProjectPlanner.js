import React, { useContext } from 'react';

// Components
import Stage from './Stage';

// Utils
import { ItemContext } from '../utils/ItemContext';

const ProjectPlanner = () => {
  const itemContext = useContext(ItemContext);

  return (
    <div className="project-div planner">
      <Stage name="To-do" currentStage={itemContext.todo} />
      <Stage name="In progress" currentStage={itemContext.inProgess} />
      <Stage name="Done" currentStage={itemContext.done} />
    </div>
  );
};

export default ProjectPlanner;
