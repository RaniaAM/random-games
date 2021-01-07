import React, { Component } from 'react'
import data from './DataSource'


class DareToDo extends Component {
    state = {
        dataSource: data
    }
    render() {
        const data = this.state.dataSource.dares.dareToDo;

        const array = data.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <>
                <div>{array}</div>
            </>
        );
    }
}

export default DareToDo;
