import React from 'react';
import Top from '../../components/header'
import Foot from '../../components/footer';
import Container from '../../components/container';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Top></Top>
                <Container></Container>
                <Foot></Foot>
            </div>
        );
    }
}