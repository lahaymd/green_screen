import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import WebCam from './components/WebCam';
import store from './store';
import SvgFilter from './components/SvgFilter';
import RedChannelEditor from './components/RedChannelEditor';
import GreenChannelEditor from './components/GreenChannelEditor';
import BlueChannelEditor from './components/BlueChannelEditor';
import RedEditor from './components/RedEditor';
import GreenEditor from './components/GreenEditor';
import BlueEditor from './components/BlueEditor';
import Image from './components/Image';
import SelectMenu from './components/SelectMenu';
import PostRGBValues from './components/PostRGBValues';


class App extends Component {

  componentDidMount() {
 
  fetch('/green_screen')
    .then(res => res.json())
    .then(data => console.log(data))
      
  
}
    render() {

    return (
      <Provider store={store}>
        <div className="App">
          <SvgFilter/>
          <div className='grid-wrapper'>
            <div className='inputs'>
              <RedChannelEditor/>
              <GreenChannelEditor/>
              <BlueChannelEditor/>
              <SelectMenu/>
              <PostRGBValues/>
            </div>
            <RedEditor/>
            <GreenEditor/>
            <BlueEditor/>
            <WebCam/>
          </div>
          {/* <Image/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
