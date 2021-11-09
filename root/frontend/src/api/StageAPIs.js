import axios from 'axios';

const createPost = (newStage) => {
  axios.post('http://localhost:4000/add_stage_array', newStage);
};

const getPost = (stage) => {
  axios.get('http://localhost:4000/get_stage_array', stage);
};

export { createPost, getPost };

// TODO: Connect createPost to form
// TODO: Connect getPost to start up
// TODO: Call createPost if get request returns nothing
// TODO: Create a put request to update items
