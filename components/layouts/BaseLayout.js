import Header from '../shared/Header'


const BaseLayOut = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default BaseLayOut