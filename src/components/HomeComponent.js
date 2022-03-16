import React, { Component } from 'react';
import { Card, CardLink, CardTitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Hot1Img from '../hot11.jpg';
import Hot2Img from '../hot21.jpg';
import Hot3Img from '../hot31.jpg';
import Hot4Img from '../hot41.jpg';
import { FaAppleAlt, FaSnowflake,FaThumbsUp,FaSun,FaBuilding,FaArchway, FaUmbrellaBeach } from "react-icons/fa";

import { IoFlower } from "react-icons/io5";
//<link rel="stylesheet" href="../App.css"></link>
//import Hotse from './HotSeComponent';
import "../index.css"

class Home extends Component {

    constructor(props) {
        super(props);

        
        this.state = {            
            category: 'All',
            search: ''
        }
        this.state.category = this.props.mainitems.category;
        this.state.mainitems = this.props.mainitems.mainitems;
        this.state.mainitems.image = this.props.mainitems.mainitems.image;
        this.handleCaChange = this.handleCaChange.bind(this);
        this.handleHotChange = this.handleHotChange.bind(this);
    }

    handleCaChange(e) {        
        //this.props.mainitems.category= e.target.value;
        this.setState( {
            category: e.target.value
        });  
        //this.setState({value: e.target.value});
        //e.preventDefault();
        //console.log('eeee'+this.props.mainitems.category);
    }
    handleSeChange(e) {        
        this.props.mainitems.search= e.target.value;
        //console.log('eeee'+this.props.mainitems.search);
    }    

    handleHotChange(e) {        
        this.props.mainitems.search= e.target.value;
        //console.log('eeee'+this.props.mainitems.search);
    }    

    render() {
        //const menu = this.props.mainitems.map((item) => {          
        //});
        //col-12 col-md-5 mt-2 mx-5
        //<Card key={item.image}  className="col-12 col-md-4 mt-2  border border-light bg-white shadow" style={{"margin-right": "25px"}} onClick={() => this.props.onSubmit("",item.SubCategory)}>
        const items = [
            {
                id: 0,
                name:'Popular visits',
                Category: 'Hot',
                SubCategory: 'Popular',
                image: Hot1Img,
                description:'Places with lots of people'                        
            },
            {
              id: 1,
              name:'Colleges',
              Category: 'Hot',
              SubCategory: 'College',
              image: Hot2Img,
              description:'Best colleges in the world'                        
            },
           {
              id: 2,
              name:'Beach',
              Category: 'Hot',
              SubCategory: 'Beaches',
              image: Hot3Img,
              description:'Lots of beaches to have fun'                        
            },
            {
                id: 3,
                name:'Museum',
                Category: 'Hot',
                SubCategory: 'Museum',
                image: Hot4Img,
                description:'Lots of beaches to have fun'                        
              }
        ];
        const hotslides = items.map((item) => {
            return (
              <Card key={item.image}  className="col-12 col-md-5 mt-2 mx-5 bg-white" style={{"margin-right": "25px","border-style":"none", display:"flex","align-items": "center"}} onClick={() => this.props.onSubmit("",item.SubCategory)}>
                <button style={{"border-style":"none",  "background-color": "white"}}>
                <img src={item.image} alt={item.name} style={{"border-radius": "10px",width: "400px", ":hover":{cursor:"hand"}}} onClick={() => this.props.onSubmit("",item.SubCategory)}/> 
                </button>
                <button style={{textDecoration: "none", "border-style":"none", color: "blue", "background-color": "white", "font-weight": "bold", "font-size": "20px","text-align": "center"}} onClick={() => this.props.onSubmit("",item.SubCategory)}>{item.SubCategory}</button>
              </Card>
            );
        });

        if(!(this.state.mainitems[1]))
        {
            return <div>Loading</div>
        }

        return (
           
          <div className="container mx-1"> 
                <div class="mt-2">
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue", "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg" active>
                        <Link to="/spring" from="/home" style={{textDecoration: "none"}}><span style={{color: "blue"}}><IoFlower />Spring</span></Link></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue","box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg" active>
                        <Link to="/summer" from="/home" style={{textDecoration: "none"}}><span style={{color: "blue"}}><FaSun />Summer</span></Link></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue","box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg" active>
                        <Link to="/autumn" from="/home" style={{textDecoration: "none"}}><span style={{color: "blue"}}><FaAppleAlt />Autumn</span></Link></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue","box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg" active>
                        <Link to="/winter" from="/home" style={{textDecoration: "none"}}><span style={{color: "blue"}}><FaSnowflake />Winter</span></Link></Button>
                    <Button style={{background: "white", "margin-right": "15px", offset: "1", "border-color":"blue", "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg"
                        onClick={() => this.props.onSubmit("", "College")}><span style={{color: "blue"}}><FaArchway /> College</span></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue", "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg"
                        onClick={() => this.props.onSubmit("", "Popular")}><span style={{color: "blue"}}><FaThumbsUp /> Popular</span></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue", "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg"
                        onClick={() => this.props.onSubmit("", "Beaches")}><span style={{color: "blue"}}><FaUmbrellaBeach /> Beach</span></Button>
                    <Button style={{background: "white", "margin-right": "15px", "border-color":"blue", "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} size="lg"
                        onClick={() => this.props.onSubmit("", "Museum")}><span style={{color: "blue"}}><FaBuilding /> Museum</span></Button>
                </div>
                
                <div class="row mt-4 ml-5" style={{"text-align": "center"}}>
                    <h4 style={{"font-weight": "bold", color: "blue"}}>Season specific</h4>
                    <h5 style={{color: "blue"}}>See which season spots you like</h5>
                </div>  
                <div class="row">  
                <div key={this.state.mainitems[1].image} className="col-12 col-md-5 mt-2 mx-5" >
                    <Card style={{"margin-right": "25px","border-style":"none", display:"flex","align-items": "center"}}>
                       <Link to="/spring" from="/home" style={{textDecoration: "none"}}>
                        <img  src={this.state.mainitems[1].image} alt={this.state.mainitems[1].name} style={{"border-radius": "10px",width: "400px"}} />  
                        <CardTitle tag="h4" style={{"font-weight": "bold", color: "blue", textDecoration: "none"}}>{this.state.mainitems[1].name}</CardTitle> 
                        <CardLink>{this.state.mainitems[1].description}</CardLink>  
                       </Link>              
                        
                    </Card>
                </div>

                <div key={this.state.mainitems[2].image} className="col-12 col-md-5 mt-2 mx-5" >
                    <Card style={{"margin-right": "25px","border-style":"none", display:"flex","align-items": "center"}}>  
                       <Link to="/summer" from="/home" style={{textDecoration: "none"}}>
                        <img  src={this.state.mainitems[2].image} alt={this.state.mainitems[2].name} style={{"border-radius": "10px",width: "400px"}}/>                         
                        <CardTitle tag="h4" style={{"font-weight": "bold", color: "blue", textDecoration: "none"}}>{this.state.mainitems[2].name}</CardTitle>
                        <CardLink>{this.state.mainitems[2].description}</CardLink>
                       </Link>
                    </Card>
                </div>

                <div key={this.state.mainitems[3].image} className="col-12 col-md-5 mt-2 mb-2 mx-5" >
                    <Card style={{"margin-right": "25px","border-style":"none", display:"flex","align-items": "center"}}> 
                        <Link to="/autumn" from="/home" style={{textDecoration: "none"}}>
                            <img  src={this.state.mainitems[3].image} alt={this.state.mainitems[3].name} style={{"border-radius": "10px",width: "400px"}} />
                            <CardTitle tag="h4" style={{"font-weight": "bold", color: "blue", textDecoration: "none"}}>{this.state.mainitems[3].name}</CardTitle>  
                            <CardLink>{this.state.mainitems[3].description}</CardLink>
                        </Link>
                    </Card>
                </div>

                <div key={this.state.mainitems[4].image} className="col-12 col-md-5 mt-2 mb-2 mx-5" >
                    <Card style={{"margin-right": "25px","border-style":"none", display:"flex","align-items": "center"}}>
                        <Link to="/winter" from="/home" style={{textDecoration: "none"}}>
                            <img  src={this.state.mainitems[4].image} alt={this.state.mainitems[4].name} style={{"border-radius": "10px",width: "400px"}}/>                      
                            <CardTitle tag="h4" style={{"font-weight": "bold", color: "blue", textDecoration: "none"}}>{this.state.mainitems[4].name}</CardTitle>                           
                            <CardLink href="/winter">{this.state.mainitems[4].description}</CardLink>  
                        </Link>                       
                    </Card>
                </div>
                </div>
                
                <div class="row my-4 mx-2" style={{"text-align": "center"}}>
                    <h4 style={{"font-weight": "bold", color: "blue","text-align": "center"}}>Hot sopts throughout the year</h4>
                    <h5 style={{color: "blue","text-align": "center"}}>Deploy what you would like</h5>
                    {hotslides}
                </div>          
                     

                          
            
            </div>
        );
    }
}

export default Home;