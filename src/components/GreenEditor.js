import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGreenStart } from '../actions/postActions';

class GreenEditor extends Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         vals: Array(256).fill(0)
    //     }
    // }

    handleEnter = (e) => {
        console.log(e.target.id);
        e.target.classList.toggle('hovered')
        // console.log('props ' + JSON.stringify(this.props));
        let a = this.props.g.slice();
        // console.log('a ' + a);
        // let b = a.map((item, index) => index > e.target.value ? item = index / 256 : item = 0)
        a.splice(e.target.id, 1, a[e.target.id] === 0 ? e.target.id / 256 : 0)
        console.log(`A ${a}`);

        this.props.updateGreenStart(a);

    }

    render() {

        let rgb = this.props.g.map((item, index) => (
            <div key={index} id={index} className={'rgb-vals green'} onMouseEnter={this.handleEnter}>{index}</div>))

        return (
            <div className='flex-row'>{rgb}</div>
        )
    }
}


const mapStateToProps = state => ({
    // posts: state.posts.items,
    // newPost: state.posts.item,
    // newRed: state.posts.red,
    g: state.posts.greenStart
})

export default connect(mapStateToProps, { updateGreenStart })(GreenEditor);
// export default RGBEditor;