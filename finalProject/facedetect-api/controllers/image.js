const handleImage = (req, res, db) => {
	//req.body because the info comes from the body, not the params
	const { id } = req.body;
	
	//get entries
	db('users')
	  .where('id', '=', id)
	  .increment('entries', 1)
	  .returning('entries', 'name')
	  .then(data => {
	  	res.json(data[0]);
	  })
	  .catch(err => res.status(400).json('unable to get count'))
}

module.exports = {
	handleImage: handleImage
}