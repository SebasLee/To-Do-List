import React, {Component} from 'react';

class List extends Component {
    render() {
        let number = 3
        return (
            <div>
                <h1>What to-do today</h1>
                <h2>{number}</h2>
            </div>
        )
    }
}

export default List;