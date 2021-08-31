import React from 'react';
import ChildCat from './ChildCat';
import frankie from './assets/frankie.png';
import fluffy from './assets/fluffy.jpg'

class Parent extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            totalTunas : 15
        } 
    }

    decrementNumberOfTotalTunas = () => {
        this.setState({
            totalTunas : this.state.totalTunas - 1
        })
    }
    
    
    render(){
        return(
            <>
            <h2>Parent</h2>
            <h4>Number of Total Tunas = {this.state.totalTunas}</h4>
            <ChildCat 
            name='Frankie' 
            imgUrl={frankie}
            decremntTotal={this.decrementNumberOfTotalTunas}
            />
            <ChildCat 
            name='Fluffy' 
            imgUrl={fluffy}
            decremntTotal={this.decrementNumberOfTotalTunas}
            />
            </>
        )
    }
}

export default Parent;