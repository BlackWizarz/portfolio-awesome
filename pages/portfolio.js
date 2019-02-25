import React from 'react'
import BaseLayOut from './../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'
 class Portfolio extends React.Component {

    static async getInitialProps  ({query}) {
        console.log(query.id)
        const postId = query.id
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const postDetail = response.data
            return {postDetail}          
        } catch (err) {
            console.log(err)
            return {postDetail: null}
        }
    }

    render () {
        return (
            <BaseLayOut>
                <h1>Portfolio Page</h1>
                <h2>{this.props.router.query.id}</h2>
                <h2>{this.props.postDetail.title}</h2>
                <h2>{this.props.postDetail.body}</h2>
            </BaseLayOut>
        )
    }
}

export default withRouter(Portfolio)