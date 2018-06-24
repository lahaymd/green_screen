import {RED_CHANNEL_INPUT, GREEN_CHANNEL_INPUT, BLUE_CHANNEL_INPUT, UPDATE_NAME, RGB_VALUES, GET_NAMES, GET_SELECTED_NAME } from './types';

// export const  updateRedStart = (redValues) => dispatch => {
//     console.log('updating red values');
//     // let data = { redState:redValues};
    
//     fetch('/green_screen', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         },
//         body: JSON.stringify({redStart: redValues})
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log('data:'+ JSON.stringify(data));
//             dispatch(
//             {
//             type: RED_CHANNEL_INPUT,
//             payload: redValues
//         })})
    
// }

export const  postRGB = (RGBValues) => dispatch => {
    console.log('fetching RGB values');
    // let data = { redState:redValues};
    
    fetch('/rgb', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({rgb: RGBValues})
    })
        .then(res => res.json())
        .then(data => {
            console.log('data:'+ JSON.stringify(data));
            dispatch(
            {
            type: RGB_VALUES,
            payload: RGBValues
        })})
    
}
export const  getRGB = () => dispatch => {
    console.log('fetching  RGB values');
    // let data = { redState:redValues};
    
    fetch('/rgb')
        .then(res => res.json())
        .then(data => {
            console.log('data from rgb name'+ JSON.stringify(data));
            dispatch(
            {
            type: GET_NAMES,
            payload: data
        })})
    
}

export const  getSelectedRGB = (name) => dispatch => {
    console.log('fetching selected RGB values');
    // let data = { redState:redValues};
    
    fetch('/rgb/name',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name: name })
    })
        .then(res => res.json())
        .then(data => {
            console.log('data from selected'+ JSON.stringify(data));
            console.log('data from selected'+ JSON.stringify(data[0]));
            dispatch(
            {
            type: GET_SELECTED_NAME,
            payload: data
        })})
    
}

export const updateName = (name) => dispatch => {dispatch({
                                type: UPDATE_NAME,
                                payload: name
                            })
}
export const updateRedStart = (redValues) => dispatch => {dispatch({
                                type: RED_CHANNEL_INPUT,
                                payload: redValues
                            })
}


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