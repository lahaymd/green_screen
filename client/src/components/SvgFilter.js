import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SvgFilter extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('will ' +JSON.stringify(this.props));
        console.log('red start '+JSON.stringify(this.props.redStrt));
        console.log('red start 1 '+JSON.stringify(this.props.redStrt.map(item =>  item.red)));

    }

    render() {

        return(

            <svg width='0' height='0'>
                <defs>
                    <filter id='greenScreen' colorInterpolationFilters="sRGB">

        <feComponentTransfer result='colorToBlack'>
                            <feFuncR id='funcR' type='discrete' tableValues={this.props.redStrt.map(item => item.red)}/>
                            <feFuncG id='funcG' type='discrete' tableValues={this.props.greenStrt.map(item => item.green)}/>
                            <feFuncB id='funcB' type='discrete' tableValues={this.props.blueStrt.map(item => item.blue)}/>
        </feComponentTransfer> 

      <feColorMatrix in='colorToBlack' result='blackAndWhite' type='matrix' 
                 values='256 256 256 0 0
                         256 256 256 0 0
                         256 256 256 0 0
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
    // newRed: state.posts.red,
    redStrt: state.posts.redStart,
    greenStrt: state.posts.greenStart,
    blueStrt: state.posts.blueStart
})

export default connect(mapStateToProps)(SvgFilter);