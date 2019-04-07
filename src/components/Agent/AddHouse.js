// Add a new house
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

class AddHouse extends React.Component {
constructor(props) {
    super(props);}

render(){
    return (
    <div>    
    <Container>    
    <div class="row">
    <div class="col-md-9 personal-info">
        <h3 style={{"textAlign": "center"}}>House Information</h3>

        <form class="form-horizontal" role="form">
        <div class="form-group">
            <label class="col-lg-3 control-label">Address:</label>
            <div class="col-lg-8">
            <input class="form-control" type="text" value="3637 Snell Avenue SPC364"></input>
            </div>
        </div>

        <div class="form-group">
            <label class="col-lg-3 control-label">Zipcode and Area:</label>
            <div class="col-lg-4">
            <input class="form-control" type="text" value="95136"></input>
            </div>
            <div class="col-lg-4">
            <input class="form-control" type="text" value="East San Jose"></input>
            </div>
        </div>

        <div class="form-group">
            <label class="col-lg-3 control-label">City and State:</label>
            <div class="col-lg-4">
            <input class="form-control" placeholder="City" type="text" value="San Jose"></input>
            </div>
            <div class="col-lg-4">
            <input class="form-control" placeholder="State" type="text" value="California"></input>
            </div>
        </div>

        {/* lot size and square feet */}
        <div class="form-group">
        <label class="col-lg-3 control-label">Lot Size and Square Feet</label>
        <div class="col-lg-4">
            <input class="form-control" placeholder="Lot Size" type="text" value="10,100"></input>
            </div>
            <div class="col-lg-4">
            <input class="form-control" placeholder="Square Feet" type="text" value="3,000ft"></input>
            </div>
        </div>

        {/* List price and year */}
        <div class="form-group">
        <label class="col-lg-3 control-label">List price and year</label>
        <div class="col-lg-4">
            <input class="form-control" placeholder="Listing Price" type="text" value="2000,000$"></input>
            </div>
            <div class="col-lg-4">
            <input class="form-control" placeholder="Year Built" type="text" value="2010"></input>
            </div>
        </div>

        <div class="form-group">
            <label class="col-lg-3 control-label">Description:</label>
            <div class="col-lg-8">
            <textarea rows={4} cols={50} name="comment" form="usrform" defaultValue={"Enter text here..."} />
            </div>
            
        </div>
        {/* 360 degree tour */}
        <div class="form-group">
            <label class="col-md-3 control-label">360-degree Tour:</label>
            <div class="col-md-8">
            <input class="form-control" type="text" value="janeuser"></input>
            </div>
        </div>

        {/* Add images */}
            <div class="form-group">
            <form action="/action_page.php">
            <label class="col-md-3 control-label">Select Images:</label>
            <div class="col-md-4"> <input type="file" name="img" multiple/> </div>
            <div class="col-md-4"> <input type="submit"/> </div>
            </form>
            </div>

        {/* Bad, bed and other useful info */}
        <div class="form-group">
            <form action="/action_page.php">
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/bedroom.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/></div>
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/shower.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/>
            </div>
            </form>
        </div>
        {/* Cooler and Heater */}
        <div class="form-group">
            <form action="/action_page.php">
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/air-conditioner.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/></div>
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/water-heater.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/>
            </div>
            </form>
        </div>
        {/* fire horse and garage */}
        <div class="form-group">
            <form action="/action_page.php">
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/fire-hydrant.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/></div>
            <label class="col-md-3 control-label"><img src="https://img.icons8.com/ios-glyphs/30/000000/garage.png"/></label>
            <div class="col-md-2"> 
            <input class="form-control" type="text" value="3"/>
            </div>
            </form>
        </div>
        

        <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-3">
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
export default withFirebase(AddHouse);
