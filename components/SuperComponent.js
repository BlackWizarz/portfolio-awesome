import React from 'react'
import BaseLayOut from './../components/layouts/BaseLayout';

export default class SuperComponent extends React.Component {

    constructor () {
        super()

        this.someVariable = 'just Some variable'
    }

    alertName (title) {
        alert(title)
    }

    render () {
        return (
            <BaseLayOut>
                <p>SuperComponent Page</p>
            </BaseLayOut>
        )
    }
}