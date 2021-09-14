import React from 'react';
import './catItem.css';

class CatItem extends React.Component {
    render(){
        return(
            <div className='catItem'>
                <p>{this.props.item.catName}</p>
                <p>{this.props.item.catBreed}</p>
                <button onClick={() => this.props.deleteCat(this.props.item._id)}>Delete</button>
            </div>
        )
    }
}

export default CatItem;