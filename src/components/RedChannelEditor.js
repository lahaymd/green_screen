import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRedStart } from '../actions/postActions';

class RedChannelEditor extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         redInput: ''
    //     }

    // }

    handleRedChange = (e) => {
        console.log('changed'+ e.target.value);
        console.log('props ' +JSON.stringify(this.props));
      
        
        let a = this.props.r.slice();
        console.log('a ' + a);
       let b = a.map((item,index) => index >= e.target.value  ? item = index/256 : item = 0)
        console.log(`b ${b}`);
        
        this.props.updateRedStart(b);
        
    }


    render() {
     


        return (
            <input type='range' min="0" max="255"    onChange={this.handleRedChange}/>
        )
    }

}



const mapStateToProps = state => ({
    // posts: state.posts.items,
    // newPost: state.posts.item,
    // newRed: state.posts.red,
    r: state.posts.redStart
})

export default connect(mapStateToProps, { updateRedStart })(RedChannelEditor);