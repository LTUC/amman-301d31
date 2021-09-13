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
  render() {
    return(
      <>
        <h1>My Favorite Cats</h1>
        {this.state.favCatsArr.map(item=>{
          return(
            <CatItem 
            item = {item}
            />
          )
        })
       }
        
      </>
    )
  }
}

export default withAuth0(FavCats);
