const express = require('express');
const router = express.Router();
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
router.get('/', (req, res) => {
	res.json({ success: true, data: ideas });
});
router.get('/:id', (req, res) => {
	const { id } = req.params;
	// console.log(id);
	const idea = ideas.find((idea) => idea.id === +id);
	if (idea) {
		res.json({ success: true, data: idea });
	} else {
		res.status(404).json({ success: false, message: 'Idea not found' });
	}
});
router.post('/', (req, res) => {
	const date = new Date().toISOString().slice(0, 10);
	const time = new Date().toISOString().slice(11, 16);
	const idea = {
		id: ideas.length + 1,
		text: req.body.text,
		tag: req.body.tag,
		username: req.body.username,
		date: `${date},${time}`,
	};
	ideas.push(idea);
	res.json({ success: true, data: idea });
});
router.put('/:id', (req, res) => {
	// console.log(id);
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (idea) {
		idea.text = req.body.text || idea.text;
		idea.tag = req.body.tag || idea.tag;
		return res.json({ success: true, data: idea });
	}
	res.status(404).json({ success: false, Error: 'Resource not found' });
});
router.delete('/:id', (req, res) => {
	const ideaIndex = ideas.findIndex((idea) => idea.id === +req.params.id);

	if (ideaIndex === -1) {
		return res
			.status(404)
			.json({ success: false, Error: 'Resource not found ' });
	}
	const delIdea = ideas.splice(ideaIndex, 1)[0];
	res.json({ success: true, data: delIdea });
});
module.exports = router;
