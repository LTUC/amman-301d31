import React, { Component } from 'react';
import Form from './form';
import Modal from './modal'

import './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'user',
      image: '',
      likeCats: false,
      developmentLanguage: '',
      show: false
    }
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      username: event.target.username.value,
      image: event.target.image.value,
      likeCats: event.target.likeCats.checked,
      developmentLanguage: event.target.language.value,
      show: true,
    })
    // console.log(event.target)
  }

  closeModalHandler = () => {
    this.setState({
      show: false
    })

  }

  filterList = e => {
   
  }

  render() {
    return (
      <>
        <Form 
          submitHandler = {this.submitHandler}
        />
        <Modal 
          show = {this.state.show}
          closeModalHandler = {this.closeModalHandler}
          username = {this.state.username}
          image = {this.state.image}
          likeCats = {this.state.likeCats}
          language = {this.state.developmentLanguage}
        />
      </>
    )
  }
}

export default Main;