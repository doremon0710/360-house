import React, { Component } from "react";

/* Import Components */
import Input from "./formcomponents/Input";
import Select from "./formcomponents/Select";
import Button from "./formcomponents/Button";
import { Container } from 'react-bootstrap';

// redirect 
import { Redirect, Router, Route } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import { withRouter } from 'react-router';

//for placeholder name and email
import { withFirebase } from '../../server/Firebase/index';


//import footer
import Footer from '../Footer/index'
let path;
let remember;
var info = [];

class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        path = this.props.history;
        console.log(path.location.state[0]);

        this.state = {
            isLoading: false,
            newUser: {
                name: path.location.state[0].name,
                email: path.location.state[0].email,
                passWord: path.location.state[0].passWord
            }
        };

        // this.handleFullName = this.handleFullName.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.handleClearForm = this.handleClearForm.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
    }



    onSubmit() {

        }

        // handleFullName(e) {
        //   let value = e.target.value;
        //   this.setState(
        //     prevState => ({
        //       newUser: {
        //         ...prevState.newUser,
        //         name: value
        //       }
        //     }),
        //     () => console.log(this.state.newUser)
        //   );
        // }
      
      
      
        // handleEmail(e) {
        //   let value = e.target.value;
        //   this.setState(
        //     prevState => ({
        //       newUser: {
        //         ...prevState.newUser,
        //         email: value
        //       }
        //     }),
        //     () => console.log(this.state.newUser)
        //   );
        // }
      
        // handleInput(e) {
        //   let value = e.target.value;
        //   let name = e.target.name;
        //   this.setState(
        //     prevState => ({
        //       newUser: {
        //         ...prevState.newUser,
        //         [name]: value
        //       }
        //     }),
        //     () => console.log(this.state.newUser)
        //   );
        // }
        
        // handlePassword(e) {
        //   let value = e.target.value;
        //   this.setState(
        //     prevState => ({
        //       newUser: {
        //         ...prevState.newUser,
        //         password: value
        //       }
        //     }),
        //     () => console.log(this.state.newUser)
        //   );
        // }
      
      
        handleFormSubmit(e) {
          path.push({
            pathname: './clientedit'},remember);
        }
      
        // handleClearForm(e) {
        //   e.preventDefault();
        //   this.setState({
        //     newUser: {
        //       name: "",
        //       email: "",
        //       password: ""
        //     }
        //   });
        // }
  
        render() {
          remember = this.state.dis;
          console.log(remember);
          console.log(this.state.newUser.passWord);
          return (
            <div>
            <Container styles={{"margin": "10px"}}>
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
              <Input
                inputType={"text"}
                title={"Name"}
                name={"name"}
                value={this.state.newUser.name}
                placeholder={path.location.state[0].name}
                handleChange={this.handleInput}
              />{" "}
              <p> Type in the textbox to change your account name</p>
              {/* Email of the user */}
              <Input
                inputType={"email"}
                title={"Your Email"}
                name={"email"}
                value={this.state.newUser.email}
                // placeholder={this.state.dis[0]?this.state.dis[0].email:null}
                handleChange={this.handleInput}
              />{" "}
              <p> Type in the textbox to change your email</p>
            
              <Input
                inputType={"password"}
                title={"Password"}
                name={"password"}
                value={this.state.newUser.passWord}
                // placeholder={this.state.dis[0]?this.state.dis[0].password:null}
                handleChange={this.handleInput}
              />{" "}
              <p> Type in the textbox to change your password</p>
            
              <Button
                action={this.handleFormSubmit}
                type={"primary"}
                title={"Submit"}
                style={buttonStyle}
              />{" "}
              {/*Submit */}
              <Button
                action={this.handleClearForm}
                type={"secondary"}
                title={"Clear"}
                style={buttonStyle}
              />{" "}
              {/* Clear the form */}
              <p> Click submit to correct your account information or clear to undo</p>
            </form>
            </Container>
            <Footer id="footer" style={{"position":"absolute","left":"0",  "bottom":"0", "right":"0"}}/>
            </div>
          );
        }
      }
      
      const buttonStyle = {
        margin: "10px 10px 10px 10px"
      };
      
      export default withFirebase(FormContainer);


//original schema 
//   newUser: {
//     name: "",
//     age: "",
//     gender: "",
//     skills: [],
//     about: ""
//   },
//   genderOptions: ["Male", "Female", "Others"],
//   skillOptions: ["Programming", "Development", "Design", "Testing"]
// };
// this.handleTextArea = this.handleTextArea.bind(this);
// this.handleAge = this.handleAge.bind(this);
// this.handleFullName = this.handleFullName.bind(this);
// this.handleFormSubmit = this.handleFormSubmit.bind(this);
// this.handleClearForm = this.handleClearForm.bind(this);
// this.handleCheckBox = this.handleCheckBox.bind(this);
// this.handleInput = this.handleInput.bind(this);

// this.handleTextArea = this.handleTextArea.bind(this);
// this.handleAge = this.handleAge.bind(this);

// handleTextArea(e) {
//   console.log("Inside handleTextArea");
//   let value = e.target.value;
//   this.setState(
//     prevState => ({
//       newUser: {
//         ...prevState.newUser,
//         about: value
//       }
//     }),
//     () => console.log(this.state.newUser)
//   );
// }

// handleCheckBox(e) {
//   const newSelection = e.target.value;
//   let newSelectionArray;

//   if (this.state.newUser.skills.indexOf(newSelection) > -1) {
//     newSelectionArray = this.state.newUser.skills.filter(
//       s => s !== newSelection
//     );
//   } else {
//     newSelectionArray = [...this.state.newUser.skills, newSelection];
//   }

//   this.setState(prevState => ({
//     newUser: { ...prevState.newUser, skills: newSelectionArray }
//   }));
// }


{ /* Age Selection */ } {
    /* <CheckBox
              title={"Skills"}
              name={"skills"}
              options={this.state.skillOptions}
              selectedOptions={this.state.newUser.skills}
              handleChange={this.handleCheckBox}
            />{" "} */
} { /* Skill */ } {
    /* <TextArea
              title={"About you."}
              rows={10}
              value={this.state.newUser.about}
              name={"currentPetInfo"}
              handleChange={this.handleTextArea}
              placeholder={"Describe your past experience and skills"}
            /> */
} { /* About you */ }


// handleAge(e) {
//   let value = e.target.value;
//   this.setState(
//     prevState => ({
//       newUser: {
//         ...prevState.newUser,
//         age: value
//       }
//     }),
//     () => console.log(this.state.newUser)
//   );
// }