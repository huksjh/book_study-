import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps: {
        name: '홍길동',
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, children, favoriteNumber } = this.props; //비구조화 할당
        return (
            <div>
                My Component {name}
                <br />
                children 값 {children}
                <br />
                숫자 값 {favoriteNumber}
            </div>
        );
    }
}
export default MyComponent;
