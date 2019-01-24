import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from './../../actions/postActions';

class ListItems extends React.Component{
    
      componentWillMount(){
        let ds = this.props.fetchPosts()
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    
      render() {
        const val = this.props.posts
        let keys = []
        if (this.props.posts.length > 0){
            keys = Object.keys(this.props.posts[0])
        }
        const TableRow = (row) => (
            keys.map((val, id) => <td key={id}>{row.row[val]}</td>)
          )
        return (
          <div className='container'>
          <div className='columns'>
            <div className='column is-6'>
                <p className='title is-3'>{ this.props.header}</p>
            </div>
            <div className='column is-6'>
                { this.props.search ? <div className="field has-addons is-pulled-right">
                    <div className="control">
                        <input className="input" type="text" placeholder="Search" />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                        Search
                        </a>
                    </div>
                </div>  : <span></span> }
                       
            </div>
          </div>
            <table className="table is-bordered">
                <thead>
                    <tr>
                    {keys.map((key, id)=><th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {val.map((val, id) =><tr key={id}><TableRow row={val} /></tr>)}
                </tbody>
            </table>
          </div>
        );
      }
}

ListItems.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(ListItems);

