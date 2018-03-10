import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCcs9BiiY9DX01sxlkG2QmY7I88kb8vdTU';



class App extends Component {
 constructor(props) {
   super(props);
  
   this.state = { Videos: [] };
  YTSearch({key: API_KEY, term: 'sufboards'}, function(data) {
   this.setState({ videos: data});
    });
  } 
  render() {
  return (
  <div>
    <SearchBar />
  </div>
  );
}
}
ReactDOM.render(<App />, document.querySelector('.container'));