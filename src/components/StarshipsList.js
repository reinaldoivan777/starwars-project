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

    componentWillMount() {
        this.getStarships(this.props.data)
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
        return (
            <Modal.Content>
                <Card.Group>
                    {
                        this.state.starships.map((starship, index) => {
                            return (
                                <Card key={index}>
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