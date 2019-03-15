import React, { Component } from 'react'
import { connect } from "react-redux"
import { Card, Modal } from "semantic-ui-react"
import axios from 'axios'
import StarshipsList from './StarshipsList'

class CharactersList extends Component {
    constructor() {
        super()
        this.state = {
            character: []
        }
    }
    
    componentWillMount() {
        this.getCharacter()
    }
    

    getCharacter() {
        let promise = []
        if (this.props.films.data !== undefined && this.props.filmIndex !== -1) {
            this.props.films.data.results[this.props.filmIndex].characters.map(url => {
                promise.push(axios.get(url))
            })
            Promise.all(promise)
                .then(res => {
                    this.setState({
                        character: res
                    })
                })
        }
    }

    render() {
        this.getCharacter()
        return (
            <div style={{width: "100%", height: "auto", marginTop: 32, textAlign: "center"}}>
                <h3 style={{color: "white"}}>
                    List of Character
                </h3>
                <Card.Group>
                    {
                        (this.state.character.length > 0) ?
                            this.state.character.map((char, index) => {
                                return (
                                    <Modal key={index} trigger={
                                        <Card style={{width: "100%"}} key={index}>
                                            <Card.Content>
                                                <Card.Header content={char.data.name} />
                                            </Card.Content>
                                        </Card>
                                    }>
                                        {
                                            (char.data.starships.length > 0) ?
                                                    <Modal.Header>List of Starships</Modal.Header>
                                            :
                                                <Modal.Header>This Character Doesn't has a starship</Modal.Header>
                                        }
                                        {
                                            (char.data.starships.length > 0) ?
                                                <StarshipsList data={char.data.starships} />
                                            :
                                                ""
                                        }
                                    </Modal>
                                )
                            })
                        :
                            ""
                    }
                </Card.Group>
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

export default connect(mapStateToProps)(CharactersList)