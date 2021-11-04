import React, { useContext } from 'react';

// Components
import Stage from './Stages/Stage';

// Utils
import { ItemContext } from '../utils/ItemContext';

const ProjectPlanner = () => {
  const itemContext = useContext(ItemContext);

  return (
    <div className="project-div planner">
      <Stage name="To-do" currentStage={itemContext.todo} />
      <Stage name="In progress" currentStage={itemContext.inProgress} />
      <Stage name="Done" currentStage={itemContext.done} />
    </div>
  );
};

export default ProjectPlanner;
