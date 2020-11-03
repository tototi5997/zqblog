import React from 'react'
import {Row,Col,Card,Avatar,BackTop  } from 'antd'
import './index.less'
import { SmileOutlined,FieldTimeOutlined,EyeOutlined,EditOutlined,GithubOutlined} from '@ant-design/icons';

const {Meta} = Card;


export default class Container extends React.Component{
    state={
        time:'2020-11-03',
        
    }
    render(){
        const style={
            height: 40,
            width: 40,
            // lineHeight: '40px',
            // borderRadius: 4,
            // backgroundColor: '#1088e9',
            // color: '#fff',
            // textAlign: 'center',
            // fontSize: 14,
            // background:'/icon/bear.png'
        }
        return(
            <div  className='container'>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className='notice'>
                            <div className='notice-warp'>
                            <p className='notice-word'><SmileOutlined /> : This is a notice world!!!</p>
                            </div>
                        </div>

                            <Card title='近况' className='logCard'>
                                    <Card title='React项目打包上传Github' className='inner-logCard' extra={<p><FieldTimeOutlined/> {this.state.time}</p> }>
                                    第一步...
                                    </Card>

                                    <Card 
                                    className='inner-logCard'
                                    cover={
                                        <img
                                            alt="example"
                                            src="/icon/bear.png"
                                        />
                                        }
                                        extra={<p><FieldTimeOutlined/> {this.state.time}</p> }
                                        actions={[
                                            <EyeOutlined  key="check" />,
                                            <EditOutlined  key="edit" />,
                                            <GithubOutlined  key="gitthub" />,
                                          ]}
                                        >
                                           <Meta
                                            avatar={<Avatar src="/icon/user.png" />}
                                            title="React项目打包上传Github"
                                            description="This is the description"/> 
                                    </Card>

                                    <Card title='React项目打包上传Github'
                                    className='inner-logCard'
                                    >
                                    </Card>
                                    
                            </Card>
                    </Col>
                    <Col span={3}>
                    <BackTop>
                        <div style={style}><img src='/icon/rocket.png'/></div>
                    </BackTop>
                    </Col>
                </Row>
            </div>
        );
    }
}