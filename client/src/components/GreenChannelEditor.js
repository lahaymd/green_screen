import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGreenStart } from '../actions/postActions';

class GreenChannelEditor extends Component {

    handleGreenChange = (e) => {
        console.log('changed' + e.target.value);
        console.log('props ' + JSON.stringify(this.props));


        let a = this.props.g.slice();
        console.log('a ' + a);
        let b = a.map((item, index) => { return { green: (e.target.value < index ? index / 256 : 0), hovered: (index >= e.target.value && e.target.value != 255 ? false : true ) } })
        console.log(`b ${b}`);

        this.props.updateGreenStart(b);

    }



    render() {



        return (
            <label className='slider-label color-green'>GREEN
                <input className='range' type='range' min="0" max="255" onChange={this.handleGreenChange} />
            </label>
        )
    }

}



const mapStateToProps = state => ({
    g: state.posts.greenStart
})

export default connect(mapStateToProps, { updateGreenStart })(GreenChannelEditor);