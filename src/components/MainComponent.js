import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Spring from './SpringComponent';
import Summer from './SummerComponent';
import Autumn from './AutumnComponent';
import Winter from './WinterComponent';
import Hot from './HotComponent';
import Hotse from './HotSeComponent';
import { MAINITEMS } from '../shared/mainitems';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainitems: {
          mainitems: MAINITEMS,
          category: "All",
          search: ""          
           },
           redirectToHot: false
        };
        
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

 
    handleSubmit1(values, cate) {
        
        //values.preventDefault();
        this.setState( {
            mainitems: {
                mainitems: this.state.mainitems.mainitems,
                category: cate,
                search: ""          
                 },
            redirectToHot: true
        });       
          
    }

    render() {
        const SpringPage = () => {
            return(
                <Spring 
                />
            );
        }

        const SummerPage = () => {
            return(
                <Summer 
                />
            );
        }

        const AutumnPage = () => {
            return(
                <Autumn 
                />
            );
        }

        const WinterPage = () => {
            return(
                <Winter 
                />
            );
        }
        const HotPage = () => {
            return(
                <Hot 
                />
            );
        }

        const redirectToHot = this.state.redirectToHot;
        if (redirectToHot) {
            //return <Redirect to="/hot" component={() => <Hot category={this.state.category} search={this.state.search}/>} />
            //console.log('before2'+this.state.mainitems.category);
            this.setState( {
                redirectToHot: false
            });  
            return <Redirect push from="/home" to="/hotse" component={() => <Hotse category={this.state.mainitems.category} />}/> ;
        }

        return (
            <div className="App">
              <Header />
              <Switch>
                <Route path='/spring' component={SpringPage} />
                <Route path='/summer' component={SummerPage} />
                <Route path='/autumn' component={AutumnPage} />
                <Route path='/winter' component={WinterPage} />
                <Route path='/hot' component={HotPage}/>
                <Route path='/hotse' component={() => <Hotse category={this.state.mainitems.category} />} />
                <Route exact path='/home' component={() => <Home mainitems={this.state.mainitems} 
                onSubmit={this.handleSubmit1.bind()} />} />
                <Redirect to="/home" component={() => <Home mainitems={this.state.mainitems} 
                onSubmit={this.handleSubmit1.bind()}/>} />
              </Switch>
              <Footer />
            </div>
        );
    }
}

export default Main;
