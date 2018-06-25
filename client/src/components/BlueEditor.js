import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBlueStart } from '../actions/postActions';

class BlueEditor extends Component {

    handleEnter = (e) => {
        console.log(e.target.id);
        console.log(e);
        let a = this.props.b.slice();
        a.splice(e.target.id, 1, { blue: a[e.target.id].blue === 0 ? e.target.id / 256 : 0, hovered: !a[e.target.id].hovered })
        console.log(`A ${JSON.stringify(a)}`);

        this.props.updateBlueStart(a);

    }

    render() {

        let rgb = this.props.b.map((item, index) => (
            <div key={index} id={index} className={`rgb-vals blue ${item.hovered ? 'hovered' : ''}`} onMouseEnter={this.handleEnter}>{index}</div>))

        return (
            <div className='flex-row blue'>{rgb}</div>
        )
    }
}


const mapStateToProps = state => ({
    b: state.posts.blueStart
})

export default connect(mapStateToProps, { updateBlueStart })(BlueEditor);
