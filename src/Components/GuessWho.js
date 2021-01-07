import React, { Component } from 'react'
import data from './DataSource'


class GuessWho extends Component {
    state = {
        dataSource: data
    }
    render() {
        const data = this.state.dataSource.guess.guessWho;

        const array = data.map((item, index) => {
            return <div key={index}>
                {item.name}
                <img src={item.img} />
            </div>

        }
        )

        return (
            <>
                <div>{array}</div>
            </>
        );
    }
}


export default GuessWho;
