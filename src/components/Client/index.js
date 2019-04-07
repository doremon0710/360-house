    import React, { Component } from 'react';
    import { Redirect, Router, Route } from 'react-router-dom';
    import * as ROUTES from "../../constants/routes";
    import { withRouter } from 'react-router';
    import {withFirebase} from '../../server/Firebase/index';

    //import for individual card
    import PropTypes from 'prop-types';
    import { withStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardActionArea from '@material-ui/core/CardActionArea';
    import CardActions from '@material-ui/core/CardActions';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Button from '@material-ui/core/Button';
    import Typography from '@material-ui/core/Typography';
    import {Container} from 'react-bootstrap';
    import Footer from '../Footer/index'
    //for button
    import {ButtonGroup} from 'reactstrap';

    //css for client
    import './client.css'

    let path;
    let remember;
    let imagesource;
    class Client extends React.Component {
      constructor(props) {
        super(props);
        path = this.props.history;
        // lastInfor = this.props.history.location.state;
        this.state = {
          isLoading: false,
          dis: []
        };
      }
      


      componentDidMount() {
        this.setState({isLoading: true});
        this.props.firebase.database.ref('account').on('value', (snapshot) => {
          const data = snapshot.val().userAccount;
          let newState = [];
          let imgs = data.userAccount1;
          console.log(imgs.passWord);
          newState.push({
                    age: imgs.age,
                    name: imgs.name,
                    email: imgs.email,
                    img: imgs.img,
                    int: imgs.interest,
                    isAgent: imgs.isAgent,
                    passWord: imgs.passWord
                    });
          this.setState({dis: newState});
        });
      }

      onProfile(){
        path.push({
        pathname: './clientform'},remember);
      };

      onEdit(){
        path.push({
          pathname: './clientedit', remember
        })
      }

      onSubmit(){
        path.push({
          pathname: './overview', remember
        })
      }

      render() {
        remember = this.state.dis;
        return (
          <div>
      <Container style={{"margin-top":"200px"}}>
      <div class="row">
        <div class="left col-lg-4">
          <div class="photo-left">
            <img class="photo" src={this.state.dis[0]?this.state.dis[0].img:null}/>
          </div>
          <h4 class="name">{this.state.dis[0]?this.state.dis[0].name:null}</h4>
          <p class="info">Realtor</p>
          <p class="info">{this.state.dis[0]?this.state.dis[0].email:null}</p>
          <div class="stats row">
          </div>
          
          {/* 2 cái nút này chỉ xuất hiện cho agent, còn user account không được phép access 2 cái nút này */}
          <div>
            <ButtonGroup>
            <Button onClick={(e) => this.onProfile()}>My Profile</Button>
            <Button onClick={(e) => this.onEdit()}>Edit Profile</Button>
            </ButtonGroup>
          </div>
              
        </div>
                      



        {/* tạo 1 function đi map data ra theo dạng image gallery */}

        <div class="right col-lg-8">
          <ul class="nav">
            <li>FAVORITE HOUSE</li>
            <li>SAVED RENDERS</li>
            <li onClick={(e) => this.backHome()}>FIND A HOME</li>
          </ul>
          <div class="row gallery">
            <div class="col-md-4">
            <img onClick={(e) => this.onSubmit()} src="https://imgur.com/GqgkPSx.jpg"/>
            </div>
              <div class="col-md-4">
                <img src="https://image.noelshack.com/fichiers/2017/38/2/1505774814-photo5.jpg"/>
              </div>
              <div class="col-md-4">
                <img src="https://image.noelshack.com/fichiers/2017/38/2/1505774814-photo6.jpg"/>
              </div>
              <div class="col-md-4">
                <img src="https://image.noelshack.com/fichiers/2017/38/2/1505774817-photo1.jpg"/>
              </div>
              <div class="col-md-4">
                <img src="https://image.noelshack.com/fichiers/2017/38/2/1505774815-photo2.jpg"/>
              </div>
              <div class="col-md-4">
                <img src="https://image.noelshack.com/fichiers/2017/38/2/1505774816-photo3.jpg"/>
              </div>
          </div>
        </div>
          </div>
          </Container>
          <Footer/>
          </div>
        );
      }
    }

    function createCard(data){
      const { classes } = data;
      return (
        <div>
        <Container>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </Container>
        </div>
      );
    }

    const imageTag={
      render(){
        return(
          <p>me</p>
        )
      }

    };

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        objectFit: 'cover',
      },
    };

    createCard.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default  withFirebase(Client);
