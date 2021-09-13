import React from 'react';

class CatItem extends React.Component {
    render(){
        return(
            <>
                <p>{this.props.item.catName}</p>
                <p>{this.props.item.catBreed}</p>
            </>
        )
    }
}

export default CatItem;