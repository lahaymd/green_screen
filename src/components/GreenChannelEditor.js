import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGreenStart } from '../actions/postActions';

class GreenChannelEditor extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         redInput: ''
    //     }

    // }

    handleGreenChange = (e) => {
        console.log('changed' + e.target.value);
        console.log('props ' + JSON.stringify(this.props));
        let a = this.props.g.slice();
        console.log('a ' + a);
        let b = a.map((item, index) => index > e.target.value ? item = index / 256 : item = 0)

        this.props.updateGreenStart(b);

    }


    render() {



        return (
            <input type='range' min="0" max="255" onChange={this.handleGreenChange} />
        )
    }

}



const mapStateToProps = state => ({
    // posts: state.posts.items,
    // newPost: state.posts.item,
    // newRed: state.posts.red,
    g: state.posts.greenStart
})

export default connect(mapStateToProps, { updateGreenStart })(GreenChannelEditor);