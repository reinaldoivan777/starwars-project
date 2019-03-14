import React, { Component } from 'react'
import { getFilms } from './actions/films'
import { connect } from "react-redux"

class App extends Component {
  
  componentWillMount() {
    this.props.getFilms()
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      films: state.films.data
  }
}

export default connect(mapStateToProps, {getFilms})(App);
