import { FETCH_POSTS, NEW_POST, RED_CHANNEL, RED_CHANNEL_INPUT, GREEN_CHANNEL_INPUT, BLUE_CHANNEL_INPUT} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    red: [1 , 0],
    redStart: Array(256).fill(0).map( (item,index) => index/256 ),
    greenStart: Array(256).fill(0).map((item, index) => index / 256),
    blueStart: Array(256).fill(0).map((item, index) => index / 256)
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer');
            
            return {
                ...state,
                items: action.payload
            };
            case NEW_POST:
            console.log('new post');
            
            return {
                ...state,
                item: action.payload
            };
            case RED_CHANNEL:
                console.log('red channel');
                return {
                    ...state,
                    red: action.payload
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
                

            
        default:
            return state;
    }
}