import React, { Component } from 'react';


class WebCam extends Component {

    componentDidMount() {
        var constraints = { video: true };
        var video = document.querySelector("video");

        function successCallback(stream) {
            video.srcObject = stream;
            video.play();
        }

        function errorCallback(error) {
            console.log("navigator.getUserMedia error: ", error);
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(successCallback)
            .catch(errorCallback);

        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            alert("enumerateDevices() not supported.");

        }

        // List cameras and microphones.

        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
                devices.forEach(function (device) {
                    console.log(device.kind + ": " + device.label +
                        " id = " + device.deviceId);
                });
            })
            .catch(function (err) {
                alert(err.name + ": " + err.message);
            });

        if (window.MediaRecorder == undefined) {
            console.error('MediaRecorder not supported, boo');
        } else {
            var contentTypes = ["video/webm",
                "video/webm;codecs=vp8",
                "video/x-matroska;codecs=avc1",
                "audio/webm",
                "video/mp4;codecs=avc1",
                "video/invalid"];
            contentTypes.forEach(contentType => {
                console.log(contentType + ' is '
                    + (MediaRecorder.isTypeSupported(contentType) ?
                        'supported' : 'NOT supported '));
            });
        }

        // // var funcR = document.querySelector('#funcR');
        // var funcG = document.querySelector('#funcG');
        // var funcB = document.querySelector('#funcB');
        // var a = [];
        // var b = [];
        // var c = [];


        // // for (var i = 0; i <= 255; i++) {
        // //     if (i >= 80 && i <= 255) {
        // //         a.push(0)
        // //     } else {

        // //         a.push(((i * 1) / 255).toFixed(3))
        // //     }
        // // }
        // // funcR.setAttribute('tableValues', a.join(' '))
        // // console.log(a)
        // // console.log(a.length)


        // for (var i = 0; i <= 255; i++) {
        //     if (i >= 180 && i <= 255) {
        //         c.push(0)
        //     } else {

        //         c.push(((i * 1) / 255).toFixed(3))
        //     }
        // }
        // funcG.setAttribute('tableValues', c.join(' '))
        // console.log(c)


        // for (var i = 0; i <= 255; i++) {
        //     if (i >= 180 && i <= 255) {
        //         b.push(0)
        //     } else {

        //         b.push(((i * 1) / 255).toFixed(3))
        //     }
        // }
        // funcB.setAttribute('tableValues', b.join(' '))
        // console.log(b)

        // console.log('loaded after')

        // console.log('a', a)
        // a.forEach(function (item, index, array) {
        //     if (item == 1) { console.log(index + 'equal') } else { console.log(index) }
        // })




    }

    render() {

        return (
            <video controls autoPlay ></video>
        )
    }
}



export default WebCam;