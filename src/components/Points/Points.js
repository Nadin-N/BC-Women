import { Component } from "react";

export class Points extends Component {
    state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    }
    
    handelIncrement = (option, value) => {
        this.setState(
            prevState => ({
                [option]: prevState[option] + value,
            })
        )
    }

    countPoints = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item
        , 0)
    }

    render() {
        const total = this.countPoints();
return (

    <>
    {Object.entries(this.state).map(([key], index) => {
        return (
            <button key={key} onClick={() => this.handelIncrement(key, index+1)}>{key}</button>
        )
    })}
    <h2>Points:{total}</h2>
    </>
)

    }
}