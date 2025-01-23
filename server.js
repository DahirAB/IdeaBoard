const express = require('express');
const app = express();
const port = 5000;
const ideas = [
	{
		id: 1,
		text: 'Postive newletter, share positive and uplifting news',
		tag: 'tech',
		username: 'tonyStark',
		date: '2022-01-02',
	},
	{
		id: 2,
		text: 'Milk cartons that turn a different colour as the milk gets older',
		tag: 'invention',
		username: 'steveRogers',
		date: '2022-01-02',
	},
	{
		id: 3,
		text: 'Atm location app which lets you know where the closet atm is and if its in service',
		tag: 'Software',
		username: 'bruceBanner',
		date: '2022-01-02',
	},
];

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to Idea post APi' });
});
//get all ideas
app.get('/api/ideas', (req, res) => {
	res.json({ success: true, data: ideas });
});
app.get('/api/ideas/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	const idea = ideas.find((idea) => idea.id === +id);
	if (idea) {
		res.json({ success: true, data: idea });
	} else {
		res.status(404).json({ success: false, message: 'Idea not found' });
	}
});
app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
