import React from 'react';
import axios from 'axios';


export default class ListItems extends React.Component{

    constructor(){
        super()
        this.state = {
        }
      }
    
      render() {
        const val = this.props.args
        return (    
          <div>
             <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        { val.map((nav, index)=> 
                            <a key={index} className="navbar-item">
                                Home
                            </a>) }

                        {/* <a className="navbar-item">
                            Documentation
                        </a> */}
                    </div>
                </div>
            </nav>
          </div>
        );
      }
}
