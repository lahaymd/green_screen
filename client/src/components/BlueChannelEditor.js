import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBlueStart } from '../actions/postActions';

class BlueChannelEditor extends Component {

    handleBlueChange = (e) => {
        console.log('changed' + e.target.value);
        console.log('props ' + JSON.stringify(this.props));


        let a = this.props.b.slice();
        let blue = a.map((item, index) => { return { blue: (e.target.value  < index  ? index/256 :  0), hovered:  index >= e.target.value && e.target.value != 255  ? false : true } })

        this.props.updateBlueStart(blue);

    }

    render() {



        return (
            <label className='slider-label color-blue'>BLUE
                <input className='range' type='range' min="0" max="255" onChange={this.handleBlueChange} />
            </label>
        )
    }

}



const mapStateToProps = state => ({
    b: state.posts.blueStart
})

export default connect(mapStateToProps, { updateBlueStart })(BlueChannelEditor);