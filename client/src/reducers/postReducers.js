import { RGB_VALUES, RED_CHANNEL_INPUT, GREEN_CHANNEL_INPUT, BLUE_CHANNEL_INPUT, UPDATE_NAME, GET_NAMES, GET_SELECTED_NAME} from '../actions/types';

const initialState = {
    name: '', 
    nameList: [],
    redStart: Array(256).fill().map( (item,index) =>  { return {red:(index < 10 ? 10/256 : index/256), hovered: false} }),
    greenStart: Array(256).fill().map((item, index) => { return { green: (index < 10 ? 10 / 256 : index / 256), hovered: false } }),
    blueStart: Array(256).fill().map((item, index) => { return { blue: (index < 10 ? 10 / 256 : index / 256), hovered: false } }),
}

export default function(state = initialState, action) {
    switch(action.type) {
            case RGB_VALUES:
                console.log('rgb values');
                console.log('rgb payload' + JSON.stringify(action.payload));
                console.log('rgb payload red' + JSON.stringify(action.payload.red));
                console.log('rgb payload name' + JSON.stringify(action.payload.name));
                const nameList = state.nameList.slice()
                nameList.push(action.payload.name)
                return {
                    ...state,
                    redStart: action.payload.red,
                    greenStart: action.payload.green,
                    blueStart: action.payload.blue,
                    nameList
                }     
            case RED_CHANNEL_INPUT:
                console.log('red channel input');
                return {
                    ...state,
                    redStart: action.payload
                }     
            case GREEN_CHANNEL_INPUT:
                console.log('green channel input');
                return {
                    ...state,
                    greenStart: action.payload
                }     
            case BLUE_CHANNEL_INPUT:
                console.log('blue channel input');
                return {
                    ...state,
                    blueStart: action.payload
                }     
            case UPDATE_NAME:
                console.log('updating name');
                return {
                    ...state,
                    name: action.payload
                }     
            case GET_SELECTED_NAME:
                console.log('getting selected name');
                console.log('getting selected name data '+ JSON.stringify(action.payload));
                console.log('getting selected name data []0 '+ JSON.stringify(action.payload[0].rgb));
                console.log('getting selected name data rgb'+ JSON.stringify(Object.keys(action.payload[0].rgb[0])));
                return {
                    ...state,
                    redStart: action.payload[0].rgb[0].red,
                    greenStart: action.payload[0].rgb[0].green,
                    blueStart: action.payload[0].rgb[0].blue
                }     
            case GET_NAMES:
                console.log('getting name');
                console.log('namelist' +JSON.stringify(action.payload));
            console.log('namelist rgb ' + JSON.stringify(action.payload.map(item => item.rgb[0].name)));
                
                return {
                    ...state,
                    nameList: action.payload.map(item => item.rgb[0].name)
                }     
                

            
        default:
            return state;
    }
}