import React, { Component } from 'react'
import { getFilms } from '../actions/films'
import { connect } from "react-redux"
import { Dropdown } from "semantic-ui-react"

class FilmsList extends Component {
    componentWillMount() {
        this.props.getFilms()
    }

    filmSelect(e, data) {
        console.log(data.value)
    }

    render() {
        let films = []
        if (this.props.films.data !== undefined)
            films = this.props.films.data.results.map((film, index) => ({
                key: index,
                text: film.title,
                value: index,
                characters: film.characters
            }))
        return (
            <Dropdown 
                placeholder="List of Star Wars Films"
                fluid
                selection
                options={films}
                onChange={this.filmSelect}
            />
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        films: state.films.data
    }
}
  
export default connect(mapStateToProps, {getFilms})(FilmsList);