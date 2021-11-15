/* eslint-disable no-console */
import axios from 'axios';

const createStage = (newStage) => {
  axios.post('http://localhost:4000/add_stage_array', newStage);
};

const getStage = async (stage) => {
  const response = await axios.get('http://localhost:4000/get_stage_array', {
    params: {
      name: stage,
    },
  });
  return response.data;
};

const updateStage = (stageName, newItem) => {
  console.log('IN STAGE API');
  console.log(stageName);
  console.log(newItem);
  axios.put('http://localhost:4000/update_stage_array', {
    name: stageName,
    item: newItem,
  });
};

export { createStage, getStage, updateStage };

// TODO: Connect updateStage whenever we change the arrays, add or deleting items
// TODO: Remove removed items from database
