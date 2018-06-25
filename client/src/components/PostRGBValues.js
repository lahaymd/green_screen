import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postRGB, updateName } from '../actions/postActions';

class PostRGBValues extends Component {

    handleRGBPost = e => {
        const rgb = {
                        name: this.props.n,
                        red: this.props.r,
                        green: this.props.g,
                        blue: this.props.b

                    }
        console.log('clicked');
        console.log(this.props.n,this.props.r,this.props.g,this.props.b);
        
        this.props.postRGB(rgb)
        
    }

    handleNameChange = e => {
        console.log(e.target.value);
        this.props.updateName(e.target.value)
        
    }

    
    render() {
        const labelStyle = {color: 'black'}
        const buttonStyle = { background: 'grey', height: '30px', fontWeight: 700}
        const inputStyle = {height:'20px', margin: '2px', marginTop: '-2px'}

        return (
            <div className='post-wrapper'>
                <label style={labelStyle}>NAME
                <input type='text' style={inputStyle} value={this.props.name} onChange={this.handleNameChange}/>
                </label>
                <button style={buttonStyle} onClick={this.handleRGBPost}>POST RGB VALUES</button>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    n: state.posts.name,
    r: state.posts.redStart,
    g: state.posts.greenStart,
    b: state.posts.blueStart
})

export default connect(mapStateToProps, { postRGB, updateName })(PostRGBValues);