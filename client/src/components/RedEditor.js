import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRedStart } from '../actions/postActions';

class RedEditor extends Component {

    handleEnter = (e) => {
        console.log(e.target.id);
        console.log(e);
        let a = this.props.r.slice();
        a.splice(e.target.id, 1, { red: a[e.target.id].red === 0 ? e.target.id/256 : 0 , hovered: !a[e.target.id].hovered})
        console.log(`A ${JSON.stringify(a)}`);
        
        this.props.updateRedStart(a);
        
    }

    render() {

        let rgb = this.props.r.map( (item,index) => (
            
            
        <div key={index} id={index} className={`rgb-vals red  ${item.hovered ? 'hovered' : ''}`} onMouseEnter={this.handleEnter}>{index}</div>))

        return (
            <div className='flex-row red'>{rgb}</div>
        )
    }
}


const mapStateToProps = state => ({

    r: state.posts.redStart
})

export default connect(mapStateToProps, { updateRedStart })(RedEditor);
