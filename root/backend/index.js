import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on ${PORT}`));

app.get('/', (req, res) => {
  res.send(
    '<h1>Hello World!</h1>',
  );
});
