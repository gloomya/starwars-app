import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from '../img/logo.png';
import './App.css';

class App extends Component {
        constructor() {
          super()
          this.state = {
              characters: [],
              planets: [],
              starships: [],
              searchfield: ''
          }
      }
      componentDidMount() {
      fetch('https://swapi.co/api/people')
      .then(resp => resp.json())
      .then(people => this.setState({ characters: people.results}));
      }
        onSearchChange = (event) => {
          this.setState({ searchfield: event.target.value })   
        }
  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
        return character.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return characters.lenght ?
          <h1 className="tc">Loading</h1> :
          (
            <div className='tc'>
            <h1 className='f1'>StarWars Characters</h1>
            <img alt='star wars logo' src={logo} />
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList characters={filteredCharacters}/>
                </ErrorBoundry>
            </Scroll>
            </div>
          );
  }
}

export default App;
