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
  axios.put('http://localhost:4000/update_stage_array', {
    name: stageName,
    item: newItem,
  });
};

const deleteStage = (stageName, id) => {
  axios.delete('http://localhost:4000/delete_item', {
    data: {
      name: stageName,
      id,
    },
  });
};

export {
  createStage, getStage, updateStage, deleteStage,
};

// TODO: Add work items to database
// TODO: Remove removed work items from database
// TODO: Allow movement between stages
