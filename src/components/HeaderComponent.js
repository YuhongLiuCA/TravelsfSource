import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { BsPersonSquare } from "react-icons/bs";
import { FaAppleAlt, FaSnowflake,FaThumbsUp,FaSun,FaHome } from "react-icons/fa";
import { IoFlower } from "react-icons/io5";
import firebase from 'firebase/app';
import 'firebase/app-check';
import "firebase/database";
//importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-database.js');
class Header extends Component {
    constructor(props) {
        super(props);

        const config = {
            apiKey: "AIzaSyCzRT74BrkIVU3pHDxP8FfXHEmtKGR8Jbw",
            authDomain: "travelsf.firebaseapp.com",
            databaseURL: "https://travelsf-default-rtdb.firebaseio.com",
            projectId: "travelsf",
            storageBucket: "travelsf.appspot.com",
            messagingSenderId: "101029507407",
            appId: "1:101029507407:web:a52917fc8d7451d54c553a",
            measurementId: "G-X6HMCH173Z"
        };        

        //firebase.initializeApp(config);
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
         }else {
            firebase.app(); // if already initialized, use that one
         }
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogoff = this.handleLogoff.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            userLogin: false,
            username: '',
            password: ''
        };
        //this.username = '';
        //this.password = '';
        this.get_users();   
        //console.log(this.users);    
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    user_signup(data)
    {
        var rootRef =  firebase.database().ref('/users');
        rootRef.push(data);
    }

    async user_setMax(key,data)
    {
        var rootRef =  firebase.database().ref('/users');
        await rootRef.child(key).remove();
        await rootRef.push(data);
    }

    get_users()
    {
        let data = {};
        var rootRef =  firebase.database().ref('/users');
        rootRef.on('value', snapshot => {
          data = snapshot.val();      
        });
        this.users = data;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleLogoff(event) {  
        this.setState({
            userLogin: false
          });
          event.preventDefault(); 
    }

    handleLogin(event) {   
        if(this.state.username === "" || this.state.password === "")
        {
            //alert('User name or password not correct');
            let ele = document.getElementById("err_info");
            ele.innerHTML = "User name or password not correct!";
            event.preventDefault();  
            return; 
        }

        let data = [];
   
        //data["total"] = {
        //    name: "total",
        //    password: "10"};

        //this.user_signup(data);
        this.get_users();
        data = this.users;
        var result = [];

        var found = 0;
        for(var i in data)
        {
          result.push(data[i]);
          //console.log(data[i]);
          for(var j in data[i])
          {
              var x = data[i][j];
              //console.log(data[i][j]);
              //console.log(x.name);
              //console.log(x.password);
              if((x.name === this.state.username) && (x.password === this.state.password))
              {
                  //console.log('User Login success!');
                  found = 1;
                  this.setState({
                    userLogin: true
                  });
              }
          }
        }

        if(found === 0)
        {
            //alert('User name or password not correct');
            let ele = document.getElementById("err_info");
            ele.innerHTML = "User name or password not correct!";
            this.setState({
                userLogin: false
            });
        } else {
            this.toggleModal();
        }
              
        event.preventDefault();        
    }

    handleSignup(event) { 
        //alert('touch1');       
        let data = [];
        if(this.state.username === "total"){
            this.setState({
                userLogin: false
            });
            //alert('Username not allowed');
            let ele = document.getElementById("err_info");
            ele.innerHTML = "Username not allowed!";
            //this.toggleModal();        
            event.preventDefault();             
            return; 
        }
        if(this.state.username === "" || this.state.password === "")
        {
            let ele = document.getElementById("err_info");
            ele.innerHTML = "Username and password can not be empty!";
            //alert('Username and password can not be empty');
            return; 
        }
        //alert('touch1');
        this.get_users();
        data = this.users;
        var result = [];       

        var max = 0;
        var tt = 'total';
        var ii;
        for(var i in data)
        {
          result.push(data[i]);
          //console.log(data[i]);
          for(var j in data[i])
          {
              var x = data[i][j];
              //console.log(data[i][j]);
              //console.log(x.name+' name');
              //console.log(x.password + 'word');
              if((x.name === this.state.username) && (x.password === this.state.password))
              {
                  this.setState({
                    userLogin: false
                  });
                  
                  let ele = document.getElementById("err_info");
                  ele.innerHTML = "User name already exist in Database!";
                  //this.toggleModal();        
                  event.preventDefault();   
                  return;
              }
              if((x.name === tt))
              {
                  max = parseInt(x.password);
                  //console.log(i+'  iii');
                  //console.log(j + '   jjj');
                  //alert('Found!')
                  ii = i;
              }
          }
        }

        max += 1;
        
        var xx = max.toString();
        var data1 =[];
        data1[xx] = {
            name: this.state.username,
            password: this.state.password};
        this.toggleModal();    
        this.user_signup(data1);

        var data2 = [];
        data2["total"] = {
            name: "total",
            password: xx};

        //this.user_signup(data);

        this.user_setMax(ii,data2);

        //var rootRef =  firebase.database().ref('/users');
        //await rootRef.child(ii).remove();
        //await rootRef.push(data2);
        //console.log(data1);
        //console.log(this.state.username);
        //console.log(this.state.password);
        //console.log(event.target);

        //this.toggleModal();        
        event.preventDefault();        
    }

    render() {
        const isLoggedIn = this.state.userLogin;
        let button1;
        if (isLoggedIn) {
          button1 = <Button onClick={this.handleLogoff} style={{color: "#FFFFFF", "border-style":"none","background-color":"rgb(13,110,253)"}}> {this.state.username} <BsPersonSquare /> Log Off</Button>;
        } else {
          button1 = <Button onClick={this.toggleModal} style={{color: "#FFFFFF", "border-style":"none","background-color":"rgb(13,110,253)"}}> <BsPersonSquare /> Login</Button>;
        }

        return(
            
            <div>
                
               
                <Navbar dark color="primary">          
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} style={{color: "#FFFFFF"}} />
                        <NavbarBrand className="ml-auto" href="/">Tour reference San Francisco Bay Area</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto" style={{display: "flex", "flex-direction": "row"}}>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link"  to='/home'><FaHome /> Home</NavLink>
                            </NavItem>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link" to='/spring'><IoFlower /> Spring</NavLink>
                            </NavItem>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link"  to='/summer'><FaSun /> Summer</NavLink>
                            </NavItem>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link" to='/autumn' ><FaAppleAlt /> Autumn</NavLink>
                            </NavItem>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link" to='/winter' ><FaSnowflake /> Winter</NavLink>
                            </NavItem>
                            <NavItem style={{"margin-right": "20px"}}>
                                <NavLink className="nav-link" to='/hot' ><FaThumbsUp /> Popular</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>


                        <Nav className="mr-auto" navbar id="lognav">
                                <NavItem >
                                  {button1}
                                </NavItem>
                        </Nav>

                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                                <ModalBody>
                            <Form>
                            <label id="err_info" style={{color: "red"}}></label>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    value={this.state.username} onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    value={this.state.password}  onChange={this.handleInputChange}/>
                            </FormGroup>

                            <br></br>
                            <Button type="submit" color="primary" value='Login' onClick={this.handleLogin} class="mt-5">Login</Button>
                            <span>   </span>
                            <Button color="primary" value='Signup' onClick={this.handleSignup} class="mt-5">Sign Up</Button>
                            

                            </Form> 
                            
                            </ModalBody>
                        </Modal>
                    </div>
                </Navbar>

                
            </div>
        );
    }
}

export default Header;