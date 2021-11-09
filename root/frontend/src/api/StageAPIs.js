import axios from 'axios';

const createStage = (newStage) => {
  axios.post('http://localhost:4000/add_stage_array', newStage);
};

const getStage = (stage) => {
  axios.get('http://localhost:4000/get_stage_array', stage);
};

const updateStage = (updatedStage) => {
  axios.put('http://localhost:4000/update_stage_array', updatedStage);
};

export { createStage, getStage, updateStage };

// TODO: Connect createStage to form
// TODO: Connect getStage to start up
// TODO: Connect updateStage whenever we change the arrays
// TODO: Call createStage if get request returns nothing
