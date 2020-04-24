import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixnumber: 0,
    };

    render() {
        const { number, fixnumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixnumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1,
                            },
                            () => {
                                console.log('방금 setState가 호출됨.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    더하기
                </button>
            </div>
        );
    }
}

export default Counter;
