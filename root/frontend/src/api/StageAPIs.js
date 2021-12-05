import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'http://localhost:4000';

// FEATURE GOALS

const createStage = (newStage) => {
  axios.post(`${BASE_URL}/add_stage_array`, newStage);
};

const getStage = async (stage) => {
  const response = await axios.get(`${BASE_URL}/get_stage_array`, {
    params: {
      name: stage,
    },
  });
  return response.data;
};

const updateStage = (stageName, newItem) => {
  axios.put(`${BASE_URL}/update_stage_array`, {
    name: stageName,
    item: newItem,
  });
};

const deleteStage = (stageName, id) => {
  axios.delete(`${BASE_URL}/delete_item`, {
    data: {
      name: stageName,
      id,
    },
  });
};

const getFeatureGoal = async (stageName, featureTitle) => {
  const response = await axios.get(`${BASE_URL}/get_feature_goal`, {
    params: {
      name: stageName,
      title: featureTitle,
    },
  });
  return response.data[0].items;
};

// WORK ITEMS

const saveWorkItem = (stageName, featureTitle, item) => {
  axios.put(`${BASE_URL}/update_feature_items`, {
    name: stageName,
    title: featureTitle,
    item,
  });
};

const removeWorkItem = (stageName, featureTitle, itemID) => {
  axios.delete(`${BASE_URL}/delete_feature_item`, {
    data: {
      name: stageName,
      title: featureTitle,
      itemID,
    },
  });
};

export {
  createStage, getStage, updateStage, deleteStage, getFeatureGoal, saveWorkItem, removeWorkItem,
};
