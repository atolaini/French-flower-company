import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Layout from '../../hoc/Layout/Layout';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import Home from '../../components/Pages/Home';
import Flowers from '../../components/Pages/Flowers';
import Classes from '../../components/Pages/Classes';
import Gifts from '../../components/Pages/Gifts';
import About from '../../components/Pages/About';
import Contact from '../../components/Pages/Contact';

class Main extends Component {
    render(){
        return(
            <Layout>
                <Header />
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/Flowers" component={Flowers} />
                <Route path="/Classes" component={Classes} />
                <Route path="/Gifts" component={Gifts} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
            </Layout>
        );
    }
}

export default Main;