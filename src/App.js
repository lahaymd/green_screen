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

    // fetch('/users')
    //   .then( res => res.json())
    //   .then(data => console.log(data))



    let data = { username: 'testingput', password: 'ressword' }
    fetch('http://www.mikelahay.com/api/users/' + "59a05a63f3c64f000449d11a"
,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json())
      .then(data => console.log('fetch api put' + JSON.stringify(data)))
//     let data = { username: 'testingput', password: 'ressword' }
//     fetch('http://www.mikelahay.com/api/users/' + "59a05a63f3c64f000449d11a"
// ,
//       {
//         method: 'PUT',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*'
//         },
//         body: JSON.stringify(data)
//       })
//       .then( res => res.json())
//       .then(data => console.log('fetch api put' + JSON.stringify(data)))


    // let data = { username: 'reactt', password: 'ressword' }
    // fetch('http://www.mikelahay.com/api/users',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   .then( res => res.json())
    //   .then(data => console.log('fetch api' + JSON.stringify(data)))

    
    
      
  
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
