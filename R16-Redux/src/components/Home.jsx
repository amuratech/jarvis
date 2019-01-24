import React from 'react';
import axios from 'axios';
import ListItems from './shared/ListItems'
import NavBar from './shared/NavBar'

export default class HomeComponent extends React.Component{

  constructor(){
    super()
    this.state = {
      jsonVal: []
    }
  }

  render() {
    const val = this.state.jsonVal
    return (
      <div className='container'>
        <div className='columns is-multiline'>
          <div className='column is-12'>
            <NavBar args={[1,2,3,4,5]}></NavBar>
          </div>
          <div className='column is-6'>
            <ListItems header='Posts' search={true} url='https://jsonplaceholder.typicode.com/posts'></ListItems>
          </div>
          {/* <div className='column is-6'>
            <ListItems header='Photos' url='https://jsonplaceholder.typicode.com/photos'></ListItems>
          </div> */}
        </div>
      </div>
    );
  }
}
