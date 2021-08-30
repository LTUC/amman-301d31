import React from 'react';
import ChildCat from './ChildCat';
import frankie from './assets/frankie.png';
import fluffy from './assets/fluffy.jpg'

class Parent extends React.Component{
    render(){
        return(
            <>
            <h2>Parent</h2>
            <ChildCat name='Frankie' imgUrl={frankie}/>
            <ChildCat name='Fluffy' imgUrl={fluffy}/>
            </>
        )
    }
}

export default Parent;