import React from 'react';
import {Container} from 'react';
import Header from '../Header/header';
import Footer from '../Footer';
import axios from 'axios';
import './jsFile'
import { componentFromProp } from 'recompose';

class Home extends React.Component{

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://clara.io/js/claraplayer.min.js";
    script.async = true;

    const script2 = document.createElement("script");
    script2.src= "https://www.gstatic.com/firebasejs/5.8.2/firebase.js";
    script2.async = true;

    const script3 = document.createElement("script");
    script3.src= "jquery-3.3.1.min.js";
    script3.async = true;

    const script4 = document.createElement("script");
    script4.src= "build/three.min.js";
    script4.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
}




  loadScript(url) {
    var index = window.document.getElementByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script.index);
  }

render() {
  return(
    <Container>
      <div>
      <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>
      <script src="jquery-3.3.1.min.js"></script>
	    <script src="build/three.min.js"></script>
	    <script src="https://clara.io/js/claraplayer.min.js"></script>
	    <script src="jsFile.js"></script>
        <div id="clara-player" style={{width: 800, height: 600}} />
        <p> The Home Page is accessible by every user.</p>
      </div>
  </Container>
        );
}


}
export default Home;
