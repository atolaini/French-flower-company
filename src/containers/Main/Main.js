import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../hoc/Layout/Layout';

class Main extends Component {
    render(){
        return(
            <Layout>
                <Header />
            </Layout>
        );
    }
}

export default Main;