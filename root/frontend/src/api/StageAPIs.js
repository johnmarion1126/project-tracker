import axios from 'axios';

const createPost = (newStage) => {
  axios.post('http://localhost:4000/add_stage_array', newStage);
};

export default createPost;

// TODO: Connect createPost to form
// TODO: Create get request to fetch saved items
// TODO: Call createPost if get request returns nothing
// TODO: Create a put request to update items
