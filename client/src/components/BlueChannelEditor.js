import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBlueStart } from '../actions/postActions';

class BlueChannelEditor extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         redInput: ''
    //     }

    // }

    handleBlueChange = (e) => {
        console.log('changed' + e.target.value);
        console.log('props ' + JSON.stringify(this.props));
        let a = this.props.b.slice();
        console.log('blue ' + a);
        let blue = a.map((item, index) => index > e.target.value ? item = index / 256 : item = 0)

        this.props.updateBlueStart(blue);

    }


    render() {



        return (
            <input type='range' min="0" max="255" onChange={this.handleBlueChange} />
        )
    }

}



const mapStateToProps = state => ({
    // posts: state.posts.items,
    // newPost: state.posts.item,
    // newRed: state.posts.red,
    b: state.posts.blueStart
})

export default connect(mapStateToProps, { updateBlueStart })(BlueChannelEditor);