import React, { Component } from 'react'
import { Modal, Card } from "semantic-ui-react"
import axios from 'axios'

class StarshipsList extends Component {
    constructor() {
        super()
        this.state = {
            starships: []
        }
    }

    getStarships(starships) {
        let promise = []
        starships.map(starshipURL => {
            promise.push(axios.get(starshipURL))
        })
        Promise.all(promise)
            .then(res => {
                this.setState({
                    starships: res
                })
            })
    }

    render() {
        this.getStarships(this.props.data)
        return (
            <Modal.Content>
                <Card.Group>
                    {
                        this.state.starships.map(starship => {
                            return (
                                <Card>
                                    <Card.Content>
                                        <Card.Header content={starship.data.name} />
                                    </Card.Content>
                                </Card>
                            )
                        })
                    }
                </Card.Group>
            </Modal.Content>
        )
    }
}

export default StarshipsList