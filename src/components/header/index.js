import React from 'react'
import { Layout } from 'antd';
import './index.less'
import { Row, Col } from 'antd';

const {Header} = Layout;
export default class Top extends React.Component{
    render(){
        return(
        <Layout>
            <Header style={{height:200}} className='header'>
            <Row style={{height:200}}>
                <Col span={7}></Col>
                <Col span={10}>              
                    <img src='/icon/aline.png' className='header-icon'></img>
                    <p className='header-word'>专注于前端开发</p>
                </Col>
                <Col span={7}></Col>
            </Row>
            </Header>
            
        </Layout>
        );
    }
}