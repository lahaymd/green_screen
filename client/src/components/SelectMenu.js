import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRGB, getSelectedRGB } from '../actions/postActions';

class SelectMenu extends Component {

    componentDidMount() {
        fetch('/rgb')
            .then(res => res.json())
            .then(data => { console.log('fetch' + JSON.stringify(data.map( item => item.rgb[0].name)));
                // const list = data.map(item => item.rgb[0].name)
                this.props.getRGB()
            })
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.props.getSelectedRGB(e.target.value)
        
    }

    render() {

        return (
            <select onChange={this.handleChange}>
                <option>fuck you</option>
                {this.props.nameList.map(item => <option key={item}>{item}</option>)}
            </select>
        )
    }

}

const mapStateToProps = state => ({

    nameList: state.posts.nameList
})

export default connect(mapStateToProps, { getRGB, getSelectedRGB })(SelectMenu);