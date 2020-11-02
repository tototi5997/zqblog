import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Container from '../../components/container';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Container></Container>
                <Footer></Footer>
            </div>
        );
    }
}