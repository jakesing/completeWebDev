import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
	constructor() {
		super()
		//App has two states - this is what changes in the app.
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ robots: users})})
	}

	//we manage the state in here: we will change the search box every time there's a change:
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

		// this.setState({robots: filteredRobots});
	}

	render() {
		//destructuring, allows us to refer to robots and searchfield without needing to use 'this.state'
		const { robots, searchfield } = this.state;

		//based on the current state, we can render the filtered robots.
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		//check for if there are no robots - if there are none, render the h1, otherwise, render our components.
		return !robots.length ? 
		<h1 className='tc'>Loading</h1> :
			(
				<fragment className='tc flex flex-column'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</fragment>
			)
	}
}

export default App;