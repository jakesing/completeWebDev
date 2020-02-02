import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		//App has two states - this is what changes in the app.
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	//we manage the state in here: we will change the search box every time there's a change:
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

		// this.setState({robots: filteredRobots});
	}

	render() {
		//based on the current state, we can render the filtered robots.
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		//later on, we will need to manipulate the user state as well, not just in the render.
		return (
		<fragment className='tc flex flex-column'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		</fragment>
		)
	}
}

export default App;