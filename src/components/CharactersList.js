import React, { Component } from 'react'
import { connect } from "react-redux"
import { getPeopleById } from "../actions/people";

class CharactersList extends Component {
    constructor() {
        super()

    }

    getCharacter(url) {
        this.props.getPeopleById(url)
    }

    render() {
        return (
            <div style={{width: "100%", height: "auto", backgroundColor: "#ffffff"}}>
                {
                    (this.props.films.data !== undefined) ?
                        this.props.films.data.results[this.props.filmIndex].characters.map(character => {
                            this.getCharacter(character)
                        })
                    :
                        ""
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        filmIndex: state.films.filmIndex,
        films: state.films.data,
        people: state.people.data
    }
}

export default connect(mapStateToProps, {getPeopleById})(CharactersList)