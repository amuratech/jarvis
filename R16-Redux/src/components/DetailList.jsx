import React from 'react';
import axios from 'axios'
import ListItems from './shared/ListItems'
import NavBar from './shared/NavBar'

export default class DetailList extends React.Component{

    constructor(){
        super()
        this.state = {
          jsonVal: []
        }
      }
    
      render() {
        const val = this.state.jsonVal
        return (
          <div className="container">
            <NavBar args={[1,2,3]}></NavBar>
            <ListItems header='Comments' search={false} url='https://jsonplaceholder.typicode.com/comments'></ListItems>
          </div>
        );
      }
}
