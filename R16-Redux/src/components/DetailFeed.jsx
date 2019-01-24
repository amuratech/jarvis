import React from 'react';

export default class DetailFeed extends React.Component{

    componentWillMount(){
        console.log(this.props.match.params.id)
    }

    render() {
        return (
        <div>Repos - {this.props.match.params.id }</div>
        );
    }
}
