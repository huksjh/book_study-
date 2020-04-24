import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        //console.log(scrollHeight, clientHeight, scrollHeight - clientHeight);
        this.box.scrollTop = scrollHeight - clientHeight;
    };

    scrollTop = () => {
        //const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = 0;
    };

    render() {
        const style = {
            border: '1px solid',
            width: '300px',
            height: '300px',
            overflow: 'auto',
            position: 'relative',
        };
        const innerBox = {
            width: '100%',
            height: '600px',
            background: 'linear-gradient(white,black)',
        };

        return (
            <div style={style} ref={(ref) => (this.box = ref)}>
                <div style={innerBox}></div>
            </div>
        );
    }
}

export default ScrollBox;
