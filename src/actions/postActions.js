import { FETCH_POSTS, NEW_POST, RED_CHANNEL, RED_CHANNEL_INPUT, GREEN_CHANNEL_INPUT, BLUE_CHANNEL_INPUT } from './types';

export function fetchPosts() {
    console.log('fetching');
    
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))
    }
}

export const  createPost = (postData) => dispatch => {
    console.log('creating post');
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
    
}
export const  updateRedStart = (redValues) => dispatch => {
    console.log('updating red values');
    // let data = { redState:redValues};
    
    fetch('/green_screen', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({redStart: redValues})
    })
        .then(res => res.json())
        .then(data => {
            console.log('data:'+ JSON.stringify(data));
            dispatch(
            {
            type: RED_CHANNEL_INPUT,
            payload: redValues
        })})
    
}

export const updateRed = (redValues) => dispatch => {dispatch({
                                type: RED_CHANNEL,
                                payload: redValues
                            })
}

// export const updateRedStart = (redValues) => dispatch => {dispatch({
//                                 type: RED_CHANNEL_INPUT,
//                                 payload: redValues
//                             })
// }


export const updateGreenStart = (greenValues) => dispatch => {dispatch({
                                type: GREEN_CHANNEL_INPUT,
                                payload: greenValues
                            })
}
export const updateBlueStart = (blueValues) => dispatch => {dispatch({
                                type: BLUE_CHANNEL_INPUT,
                                payload: blueValues
                            })
}