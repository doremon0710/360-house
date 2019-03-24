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

    document.body.appendChild(script);
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
        <div id="player" style={{width: 800, height: 600}} />

        <p> The Home Page is accessible by every user.</p>
      </div>
  </Container>
        );
}


}
export default Home;
