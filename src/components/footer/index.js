import React from 'react'
import { Layout} from 'antd'
import { Row, Col } from 'antd';
import './index.less'
import { Divider } from 'antd';

const {Footer}  = Layout;

export default class Foot extends React.Component{
    render(){
        return(
        <Layout>
            <Footer className='foot'>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <p className='foot-word'>Copyright © 2020 by ZhangQian's blog . All rights reserved. | Theme: Akina For Typecho.</p>
                    <Divider><p>5997 Forever</p></Divider>
                </Col>
                <Col span={4}></Col>
            </Row>
            </Footer>
        </Layout>
        );
    }
}