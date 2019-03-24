import React from 'react';
import Footer from '../Footer';
import Header from '../Header/header';
import { Collapse, CardBody, Button, Card, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/footer.css';
import '../../style/homepage.css';


class Landing extends React.Component{
// var Footer = React.Footer;

constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = {
    locations: [],
    newsearch: '',
    collapse: false 
  };
}
toggle() {
  this.setState(state => ({ collapse: !state.collapse }));
}

componentDidMount() {
  //get firebase
}


render() {return(
  <div>
    <div className="root">
  <div className="container-bg">
    <div className="container" id="containerID">
      <div className="row">
        <div className="col-lg-12">
          <div id="content">
            <h1 class="typewriter"> Let' explore them all </h1>
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                {/* <div className="searchbar">
                  <input className="search_input" type="text" name placeholder="Search by zipcode, bedrooms or anything..." />
                  <a href="#" className="search_icon"><i className="fas fa-search" /></a>
                </div> */}
               <div>
        <br></br>         
        <Button color ="primary" variant="outline-primary" size ="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Search</Button>
        <Collapse isOpen={this.state.collapse}>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" name="newsearch" onChange={this.onChange} value={this.state.newsearch} multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        </Collapse>
      </div>
              </div>
            </div>
            <h3 class="typewriter"> Your dream house is waiting... </h3>
            <hr />
            {/* <button className="btn btn-primary-outline clickOn btn-lg">Check this out!</button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container" id="extraInfo">
    <div className="row">
      <div className="col-md-3">
        <div className="card-box">
          <div className="card-title">
            <h2>1,875</h2>
            <p>Houses on sale</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-box">
          <div className="card-title">
            <h2>40</h2>
            <p>Open houses</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-box">
          <div className="card-title">
            <h2>4000</h2>
            <p>Recently sold</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-box">
          <div className="card-title">
            <h2>401</h2>
            <p>Price reduced</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
        );
}       }
        export default Landing;
