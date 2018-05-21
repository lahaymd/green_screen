import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost} from '../actions/postActions';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

    }

       handleChange = (e)=> {
            this.setState({[e.target.name]: e.target.value})
        }

        handleSubmit = (e) => {
            e.preventDefault();
            const post = {
                title: this.state.title,
                body: this.state.body
            }

            // fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(post)
            // })
            // .then(res => res.json())
            // .then(data => console.log(data)
            // )

            this.props.createPost(post);
        }
  
    render() {
   


        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input name='title' type='text' onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body: </label><br/>
                        <input name='body' type='text' onChange={this.handleChange} value={this.state.body}/>
                    </div>
                    <button type='submit' >submit</button>
                </form>
              

            </div>
        )
    }

}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);