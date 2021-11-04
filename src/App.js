import React from 'react';

// Components
import ProjectHeader from './components/ProjectHeader';
import ProjectPlanner from './components/ProjectPlanner';

// Utils
import { ItemProvider } from './utils/ItemContext';

const App = () => (
  <ItemProvider>
    <ProjectHeader />
    <ProjectPlanner />
  </ItemProvider>
);

export default App;
