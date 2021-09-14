import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CatItem from './CatItem';
class FavCats extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      favCatsArr : []
    }
  }

  componentDidMount = () =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .get(`http://localhost:3010/getCats?email=${email}`)
    .then( result =>{
      this.setState({
        favCatsArr:result.data
      })
    })
    .catch (err =>{
      console.log('error');
    })
  }

  addCat = (event) =>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      catName: event.target.catName.value,
      catBreed: event.target.catBreed.value,
      ownerEmail: email
    }

    axios
    .post(`http://localhost:3010/addCat`,obj)
    .then(result =>{
      this.setState({
        favCatsArr: result.data
      })
    })
    .catch(err=>{
      console.log('Error on adding data');
    })
  }

  deleteCat = (id) =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .delete(`http://localhost:3010/deleteCat/${id}?email=${email}`)
    .then(result =>{
      this.setState({
        favCatsArr: result.data
      })
    })
    .catch(err=>{
      console.log('error in deleting cat');
    })
  }

  render() {
    return(
      <>
        <h1>My Favorite Cats</h1>
        <form onSubmit={this.addCat}>
          <fieldset>
            <legend>Add Cat:</legend>
            <input type='text' name='catName' placeholder='Cat Name' />
            <input type='text' name='catBreed' placeholder='Cat Breed' />
            <button type='submit'>Add</button>
          </fieldset>
        </form>
        {this.state.favCatsArr.map(item=>{
          return(
            <CatItem 
            item = {item}
            deleteCat = {this.deleteCat}
            />
          )
        })
       }
        
      </>
    )
  }
}

export default withAuth0(FavCats);
