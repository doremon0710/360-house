  import React, { Component } from 'react';
  import Modal from './Agent.css';
  import { Redirect, Router, Route } from 'react-router-dom';
  import * as ROUTES from "../../constants/routes";
  import { withRouter } from 'react-router';
  import './AgentForm.css';
  import {Container, Button} from 'react-bootstrap';
  import Footer from '../Footer';
  import {withFirebase} from '../../server/Firebase/index';
  const authUser = JSON.parse(localStorage.getItem("authUser"));

  let constHide = (authUser.isAgent==true?"":"none");
  let path;
  let remember;

  let lastInfor;
  class Agent extends Component {

    constructor(props) {
      super(props);
      path = this.props.history;
      lastInfor = this.props.history.location.state;
      console.log(lastInfor)
      this.state ={
        isLoading: false,
        hide: false,
        dis: []
      };
      this.handleToggleClick = this.handleToggleClick.bind(this)
      }
    

    
      handleToggleClick() {
        this.setState(prevState => ({
          hide: !prevState.hide
        }));
      }

    componentDidMount() {
      this.setState({isLoading: true});
      this.props.firebase.database.ref('account').on('value', (snapshot) => {
        const data = snapshot.val().agentAccount;
        let newState = [];
        let imgs = data.agentAccount1;
        newState.push({
                   email: imgs.email,
                   isAgent: imgs.isAgent,
                   password: imgs.password,
                   });
        this.setState({dis: newState});
      });
    }

    editaccount(){
      path.push({
      pathname: "/agenteditaccount"},
      remember);
    };

    addhouse(){
      path.push({
      pathname: ROUTES.ADDHOUSE},
      remember);
    };

    render() {
      console.log(this.state.dis.isAgent);
      return (
    <div>
    <Container>
    <div class="row">
      <div class="agent col-lg-3">
      
        <img class="photo" src="https://imgur.com/9ANQ0cX.jpg"/>

        <h4 class="name">{lastInfor[0].name}</h4>
        <p class="info">Realtor</p>
        <p class="info">{lastInfor[0].site}</p>
        <div class="stats row">
        </div>
        <div class="social" style={{"display": constHide}}>
        <Button onClick={(e) => this.editaccount()}>Edit Profile</Button>
        <Button onClick={(e) => this.addhouse()}>Add House</Button>
        </div>
      </div>
      <div class="right col-lg-9">
        <row>
        <ul class="nav">
          <li>OPEN HOUSES</li>
          <li onClick={(e) => this.backHome()}>FIND A HOME</li>
          <li>View as buyer</li>
        </ul>
        </row>
        <br/>
        <Container>
        <row>
          <section class="search-box">
            <div class="container-fluid">
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$799,000<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$506,400<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$506,400<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$799,000<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$506,400<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
              <div class="media">
                    <div class="fav-box"><i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
                      <img class="d-flex align-self-start" src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image"/>
                      <div class="media-body pl-3">
                        <div class="price">$506,400<small>New York</small></div>
                        <div class="stats">
                            <span><i class="fa fa-arrows-alt"></i>1678 Sq ft</span>
                            <span><i class="fa fa-bath"></i>2 Beadrooms</span>
                        </div>
                        <div class="address">4062 Walnut Hill Drive
                    Cincinnati</div>
                      </div>
              </div>
            </div>
          </section>
        </row>

        </Container>
      </div>
        </div>
        </Container>
        </div>
      );
    }
  }

  export default withFirebase(Agent);
