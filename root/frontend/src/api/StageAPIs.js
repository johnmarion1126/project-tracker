/* eslint-disable no-console */
import axios from 'axios';

// FEATURE GOALS

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

const getFeatureGoal = async (stageName, featureTitle) => {
  const response = await axios.get('http://localhost:4000/get_feature_goal', {
    params: {
      name: stageName,
      title: featureTitle,
    },
  });
  return response.data[0].items;
};

// WORK ITEMS

const saveWorkItem = (stageName, featureTitle, itemTitle) => {
  axios.put('http://localhost:4000/update_feature_items', {
    name: stageName,
    title: featureTitle,
    itemTitle,
  });
};

const removeWorkItem = (stageName, featureTitle, itemTitle) => {
  axios.delete('http://localhost:4000/delete_feature_item', {
    data: {
      name: stageName,
      title: featureTitle,
      itemTitle,
    },
  });
};

export {
  createStage, getStage, updateStage, deleteStage, getFeatureGoal, saveWorkItem, removeWorkItem,
};

// TODO: Allow movement between stages
