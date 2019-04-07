
    import React, { Component} from 'react';
    import {withFirebase} from '../../server/Firebase/index';
    // var Modal = require('react-bootstrap-modal');
    import Modal from "react-responsive-modal";
    import { Redirect, Router, Route } from 'react-router-dom';
    import * as ROUTES from "../../constants/routes";
    import { withRouter } from 'react-router';
    import Row from 'react-bootstrap/Row';
    import Table from 'react-bootstrap/Table';
    import Col from 'react-bootstrap/Col';
    import { Card, Icon, Image } from 'semantic-ui-react'
    import Button from "react-bootstrap/Button";
    import {Container} from "react-bootstrap";
    import Footer from "../Footer";
    let path;
    let remember;

    class AgentEditAccount extends React.Component {
    constructor(props) {
        super(props);}

    render(){
        return (
        <div>    
        <Container>    
        <div class="row">
        <div class="col-md-3">
            <div class="text-center">
            <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
            <h6>Upload a different photo...</h6>

            <input type="file" class="form-control"></input>
            </div>
        </div>
        <div class="col-md-9 personal-info">
            <h3>Personal info</h3>

            <form class="form-horizontal" role="form">
            <div class="form-group">
                <label class="col-lg-3 control-label">First name:</label>
                <div class="col-lg-8">
                <input class="form-control" type="text" value="Jane"></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Last name:</label>
                <div class="col-lg-8">
                <input class="form-control" type="text" value="Bishop"></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Company:</label>
                <div class="col-lg-8">
                <input class="form-control" type="text" value=""></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                <input class="form-control" type="text" value="janesemail@gmail.com"></input>
                </div>
            </div>

            <div class="form-group">
                <label class="col-lg-3 control-label">Email Notification:</label>
                <div class="col-lg-8">
                <div class="ui-select">
                    <select id="user_time_zone" class="form-control">
                    <option value="instant">Instantly</option>
                    <option value="weekly">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    </select>
                </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Payment Method:</label>
                <div class="col-md-8">
                <input class="form-control" type="password" value="janeuser"></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Membership:</label>
                <div class="col-md-8">
                <input class="form-control" type="datetime-local" value="11111122333"></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Confirm password:</label>
                <div class="col-md-8">
                <input class="form-control" type="password" value="11111122333"></input>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                <input type="button" class="btn btn-primary" value="Save Changes"></input>
                <span></span>
                <input type="reset" class="btn btn-default" value="Edit"></input>
                </div>
            </div>
            </form>
        </div>
    </div>
    </Container> 
    <Footer />
    </div>
    );
    }
    }
    export default withFirebase(AgentEditAccount);
