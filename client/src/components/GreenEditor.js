import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGreenStart } from '../actions/postActions';

class GreenEditor extends Component {

    handleEnter = (e) => {
        console.log(e.target.id);
        console.log(e);
        let a = this.props.g.slice();
        a.splice(e.target.id, 1, { green: a[e.target.id].green === 0 ? e.target.id / 256 : 0, hovered: !a[e.target.id].hovered })
        console.log(`A ${JSON.stringify(a)}`);

        this.props.updateGreenStart(a);

    }

    render() {

        let rgb = this.props.g.map((item, index) => (
            <div key={index} id={index} className={`rgb-vals green ${item.hovered ? 'hovered' : ''}`} onMouseEnter={this.handleEnter}>{index}</div>))

        return (
            <div className='flex-row green'>{rgb}</div>
        )
    }
}


const mapStateToProps = state => ({

    g: state.posts.greenStart
})

export default connect(mapStateToProps, { updateGreenStart })(GreenEditor);
