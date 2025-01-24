const express = require('express');
const app = express();
const port = 5000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to Idea post APi' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
