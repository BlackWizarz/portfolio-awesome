import React from 'react'
import Link from 'next/link'

import '../../styles/main.scss'

class Header extends React.Component {
    render () {
        return (
            <div>
                <p className="custom-class">I am styled P element</p>
                <p className="custom-classFromFile">I am styled P element</p>

                <Link href="/">
                    <a>Home </a>
                </Link>
                <Link href="/blogs">
                    <a>blogs </a>
                </Link>
                <Link href="/portfolios">
                    <a>Portfolios </a>
                </Link>
                <Link href="/cv">
                    <a>cv </a>
                </Link>
                <Link href="/about">
                    <a>about </a>
                </Link>
                <style jsx>
                    {
                        `
                        a {
                            font-size: 20px;
                        }
                        .custom-class {
                            color: red;
                        }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default Header