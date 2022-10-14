import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.a = {
            count: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        
    }

    

    render() {
        return (
            <div>
                <input type="text" />
                <input type="text" />
                <button onClick={()=>this.seta({count: this.a.count + 1})}>Sumar</button>
                <p>{this.a.count}</p>
            </div>
        )
    }
}

export default Test;
