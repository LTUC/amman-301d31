import React from 'react';

class Square extends React.Component {
    render(){
        return(
            <>
            <div className='square class2'>Square {this.props.squareNumber}</div>
            </>
        )
    }
}

export default Square;