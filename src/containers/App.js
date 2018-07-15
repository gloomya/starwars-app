import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from '../img/logo.png';
import _ from 'lodash';
import './App.css';

class App extends Component {
        constructor() {
          super()
          this.state = {
              movies: [],
              ascending: false,
              descending: true
          }
      }
      componentDidMount() {
      fetch('https://swapi.co/api/films')
      .then(resp => resp.json())
      .then(films => this.setState({ movies: films.results}));
      }
      handleClick = () => {
        this.setState((prevState) => {
          return {
            ascending: !prevState.ascending
          }
        });
      }
  render() {
    

    const { movies } = this.state;  
    const direction = this.state.ascending ? "asc" : "desc";
    const sortedMovies = _.orderBy(movies, ["episode_id"], [direction, "asc"]);
    return movies.lenght ?
          <h1 className="tc">Loading</h1> :
          (
            <div className='tc'>
            <img className='pa4 ma4' alt='star wars logo' src={logo} />
            <p>
              <button className='w-20 f6 link grow ba bw2 ph3 pv2 mb2 dib light-gray bg-black' onClick={this.handleClick}>
              {this.state.ascending ? "Sort by Episode ▼" : "Sort by Episode ▲"}
              </button>
            </p>
            <Scroll>
                <ErrorBoundry>
                    <CardList movies={sortedMovies}/>
                </ErrorBoundry>
            </Scroll>
            </div>
          );
  }
}

export default App;
