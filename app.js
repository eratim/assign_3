const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const blogPosts = [];

app.get('/', (req, res) => {
  res.render('index', { blogPosts });
});

app.get('/add-post', (req, res) => {
  res.render('add-post');
});

app.get('/about-me', (req, res) => {
  res.render('about-me');
});

app.get('/my-quotes', (req, res) => {
  res.render('my-quotes');
});

app.post('/add-post', (req, res) => {
  const { title, content } = req.body;
  blogPosts.push({ title, content });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});