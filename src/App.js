import React, { Component } from 'react'
import FilmsList from "./components/FilmsList"
import CharactersList from "./components/CharactersList"
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import { getFilms } from './actions/films'
import { connect } from "react-redux"

class App extends Component {
  
  componentWillMount() {
    this.props.getFilms()
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <Container>
          <Grid centered columns={2}>
            <GridColumn>
              <FilmsList data={this.props.films.data} />
              <CharactersList />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      films: state.films.data
  }
}

export default connect(mapStateToProps, {getFilms})(App)
