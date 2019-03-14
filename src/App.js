import React, { Component } from 'react'
import FilmsList from "./components/FilmsList"
import { Container, Grid, GridColumn } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <Container>
          <Grid centered columns={2}>
            <GridColumn>
              <FilmsList />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App
