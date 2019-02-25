import React from 'react'
import BaseLayOut from './../components/layouts/BaseLayout';
import axios from 'axios'
import { Link } from '../routes'

export default class Portfolios extends React.Component {

    static async getInitialProps() {
        console.log('Hello from portfolios')
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const posts = response.data
            return {posts: posts.splice(0,10)}
        } catch (err) {
            console.log(err)
            return {posts: null}
        }
    }

    renderPosts (posts) {
        return posts.map((post) => {
            return <li key={post.id}>
                <Link route={`/portfolio/${post.id}`}>
                <a> {post.title} </a>
                </Link>
            </li> 
        })
    }

    render () {
        const { posts } = this.props
        return (
            <BaseLayOut>
                <p>Portfolio Page</p>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BaseLayOut>
        )
    }
}