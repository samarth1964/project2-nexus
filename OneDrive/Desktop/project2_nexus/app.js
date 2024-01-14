const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: true }));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
app.get('/', (req, res) => {
    res.render('home.html', { user: req.session.user || '' });
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement login logic here (authenticate user)
  // For simplicity, we'll just check hardcoded values.
  if (username === 'user' && password === 'password') {
    req.session.user = username;
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

app.get('/signup', (req, res) => {
  res.render('signup.html');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Implement signup logic here (create a new user)
  // For simplicity, we'll just store the values in the session.
  req.session.user = username;
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
