import React, {fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

const Intro = () => {
  return <h1>Find a star wars character!</h1>
}

const SearchBar = ({textChange, onClick}) => {
  return (
    <fragment>
      <input 
        type='search' 
        placeholder='search people'
        onChange = {textChange} 
      />
      <button onClick = {onClick}>submit</button>
    </fragment>
  );
}

const Card = ({ name, gender, haircolor, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>{gender}</p>
        <p>{haircolor}</p>
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showIndex: null,
      user: []
    }
  }

  onTextChange = (event) => {
    this.setState({showIndex: event.target.value});
  }

  async handleClick(){
    let url = "https://swapi.co/api/people/"+this.state.showIndex
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      user: data
    })
  }
  
  render() {
    let currentValue = this.state.showIndex;
    return (
      <fragment className = 'flex flex-column-ns justify-center-ns items-center-ns'>
        <Intro />
        <p>Enter a number from 1 to 88:</p>
        <SearchBar textChange={this.onTextChange} onClick={this.handleClick}/>
        <br />
        <Card name = {this.state.user.name} gender = {this.state.user.gender} haircolor = {this.state.user.hair_color} />
      </fragment>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
