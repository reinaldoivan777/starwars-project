import React, { Component } from 'react'
import { getFilmIndex } from '../actions/films'
import { connect } from "react-redux"
import { Dropdown } from "semantic-ui-react"

class FilmsList extends Component {
    constructor() {
        super()

        this.filmSelect = this.filmSelect.bind(this)
    }

    filmSelect(e, data) {
        this.props.getFilmIndex(data.value)
    }

    render() {
        let films = []
        if (this.props.data !== undefined)
            films = this.props.data.results.map((film, index) => ({
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
        filmIndex: state.films.filmIndex
    }
}

  
export default connect(mapStateToProps, {getFilmIndex})(FilmsList);