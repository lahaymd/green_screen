import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRed } from '../actions/postActions';

class SvgFilter extends Component {

  

    componentWillReceiveProps(nextProps) {
        console.log('will ' +JSON.stringify(this.props));
        
            // this.props.newRed.unshift(nextProps.newPost);
        
    }

    render() {

        return(

            <svg width='0' height='0'>
                <defs>
                    <filter id='greenScreen' colorInterpolationFilters="sRGB">

        <feComponentTransfer result='colorToBlack'>
                            <feFuncR id='funcR' type='discrete' tableValues={this.props.redStrt}/>
                            <feFuncG id='funcG' type='discrete' tableValues={this.props.greenStrt}/>
                            <feFuncB id='funcB' type='discrete' tableValues={this.props.blueStrt}/>
        </feComponentTransfer> 

      <feColorMatrix in='colorToBlack' result='blackAndWhite' type='matrix' 
                 values='10 11 10 0 0
                         10 10 10 0 0
                         10 10 10 0 0
                         0 0 0 1 0'/> 

        <feColorMatrix in='blackAndWhite' result='whiteToTransparent' type='matrix' 
                 values='1 0 0 0 0
                         0 1 0 0 0
                         0 0 1 0 0
                        -1 0 0 1 0'/>   
  <feComposite  operator='out' in='SourceGraphic' in2='whiteToTransparent' />   

			</filter>
                </defs>
            </svg>

        )
    }
}

const mapStateToProps = state => ({
    
    // posts: state.posts.items,
    // newPost: state.posts.item,
    newRed: state.posts.red,
    redStrt: state.posts.redStart,
    greenStrt: state.posts.greenStart,
    blueStrt: state.posts.blueStart
})

export default connect(mapStateToProps, { updateRed })(SvgFilter);