import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import WebCam from './components/WebCam';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';
import SvgFilter from './components/SvgFilter';
import RedChannelEditor from './components/RedChannelEditor';
import GreenChannelEditor from './components/GreenChannelEditor';
import BlueChannelEditor from './components/BlueChannelEditor';
import RedEditor from './components/RedEditor';
import GreenEditor from './components/GreenEditor';
import BlueEditor from './components/BlueEditor';
import Image from './components/Image';


class App extends Component {

  componentDidMount() {
 console.log('pre fetch');
 
  fetch('/green_screen')
    .then(res => res.json())
    .then(data => console.log(data))
      
  
}
    render() {

    return (
      <Provider store={store}>
        <div className="App">
          <SvgFilter/>
          <RedEditor/>
          <GreenEditor/>
          <BlueEditor/>
          <RedChannelEditor/>
          <GreenChannelEditor/>
          <BlueChannelEditor/>
          <WebCam/>
          <Image/>
          {/* <PostForm/>
          <Posts/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
