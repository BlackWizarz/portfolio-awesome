import React from 'react'
import BaseLayOut from './../components/layouts/BaseLayout';
import axios from 'axios'

class Index extends React.Component {

    static async getInitialProps() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            const userData = response.data
            return {initialData: [1,2,3,4], userData}
        } catch (err) {
            console.log(err)
            return {userData: null}
        }
    }
    
    constructor (props) {
        super(props)
        console.log('constructor')
        this.state = {hello: 'Hello'}
    }

    componentDidMount () {
        console.log('Component didMount')
    }

    componentDidUpdate () {
        console.log()
        console.log('Component Updated')
    }
    render () {
        console.log('Render')
        const { userData, initialData } = this.props
        return (
            <BaseLayOut>
                <p>This is a root(index) pages, and I was updated</p>
                <h2>{userData.title}</h2>
                <h2>{initialData}</h2>
                <button onClick={() => { this.setState({hello: 'HelloWorld'})}}>Change Title</button>
            </BaseLayOut>
        )
    }
}
  
export default Index