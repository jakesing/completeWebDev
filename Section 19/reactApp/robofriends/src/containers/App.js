import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}	
}

class App extends Component {
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render() {
		//destructuring, allows us to refer to robots and searchfield without needing to use 'this.state'
		const { searchField, onSearchChange, robots, isPending } = this.props;
		//based on the current state, we can render the filtered robots.
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		//check for if there are no robots - if there are none, render the h1, otherwise, render our components.
		return isPending ? 
		<h1 className='tc'>Loading</h1> :
			(
				<div className='tc flex flex-column'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

