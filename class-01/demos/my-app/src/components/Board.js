import React from 'react';
import Square from './Square';

class Board extends React.Component{
    render(){
        return(
            <>
            {/* <div className='square class2'>Square One</div>
            <div className='square class2'>Square Two</div>
            <div className='square class2'>Square Three</div>
            <div className='square class2'>Square Four</div> */}
            <Square squareNumber='One'/>
            <Square squareNumber='Two'/>
            <Square squareNumber='Three'/>
            <Square squareNumber='Four'/>
            </>
        )
    }
}

export default Board;