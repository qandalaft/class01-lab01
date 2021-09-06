import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'

class Main extends Component {
    render() {
        return (
            <div>
                <div >
                    <HornedBeasts title="hours" />
                </div>
                <div >
                    <HornedBeasts title="red" />
                </div>

            </div>
        )
    }
}

export default Main
