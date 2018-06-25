import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRedStart } from '../actions/postActions';

class RedChannelEditor extends Component {

    handleRedChange = (e) => {
        console.log('changed'+ e.target.value);
        console.log('props ' +JSON.stringify(this.props));
      
        
        let a = this.props.r.slice();
        console.log('a ' + a);
        let b = a.map((item, index) => { return { red: (e.target.value < index ? index / 256 : 0), hovered: (index >= e.target.value && e.target.value != 255 ? false : true )}})
        console.log(`b ${b}`);
        
        this.props.updateRedStart(b);
        
    }


    render() {
     


        return (
            <label className='slider-label color-red'>RED
                <input className='range' type='range' min="0" max="255"    onChange={this.handleRedChange}/>
            </label>
        )
    }

}



const mapStateToProps = state => ({
    r: state.posts.redStart
})

export default connect(mapStateToProps, { updateRedStart })(RedChannelEditor);