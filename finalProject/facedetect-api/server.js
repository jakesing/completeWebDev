const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'jakesing',
    password : '',
    database : 'facedetect'
  }
})

const app = express();
//body parser allows us to read stuff from the body
app.use(bodyParser.json())
app.use(cors());

//get request for root
app.get('/', (req, res)=> {
	res.send(database.users)
})

//post request for signin
app.post('/signin', (req, res) => {
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
			if(isValid){
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => {
						res.json(user[0])
					})
					.catch(err => res.status(400).json('unable to get user'))
			} else{
			res.status(400).json('wrong credentials')
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
})

//post request for register
app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
	const hash = bcrypt.hashSync(password);

	//use a transaction to make sure both operations must work. 
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
				.returning('*')
				.insert({
					email: loginEmail[0],
					name: name,
					joined: new Date()
				})
				.then(user => {
					res.json(user[0]);
				})
			})
			.then(trx.commit)
			.catch(trx.rollback)
		}).catch(err => res.status(400).json('Unable to register'))
})

//:id allows us to enter anything into our browser e.g. /profile/123
app.get('/profile/:id', (req, res) => {
	//the info comes from the params in the request (i.e. the URL)
	const { id } = req.params;
	db.select('*').from('users').where('id', id)
		.then(user => {
			//check if user exists (user.length will evaluate to false if user does not exist)
			if (user.length){
				res.json(user[0]);	
			} else {
				res.status(400).json('Error getting user');
			}
		})
})

app.put('/rank', (req, res) => {
	const { id } = req.body;
	db.raw(`with RANKED as (select *, rank() over (ORDER BY entries desc) as rank from users)
		SELECT * from RANKED WHERE id=${id}`)
	.then(data => {
		res.json(data.rows[0].rank)
	})
	.catch(err => res.status(400).json('unable to get rank'))
})


app.put('/image', (req, res) => {
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
}) 


app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})


/*
All the routes we need:
/ DONE --> res = this is working
/ DONE signin --> POST request (since we're posting some info). POST = success/fail
/ DONE register --> POST = newUser
/ DONEprofile/:userID --> GET = user
need an endpoint to count how many image uploads there were:
/ DONE image --> PUT --> user

*/