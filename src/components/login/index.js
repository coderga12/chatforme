import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import firebase, { auth } from '../../firebase/config'


const { Title } = Typography

const Login = () => {

    const fbProvider = new firebase.auth.FacebookAuthProvider()

    const handlefbLogin = () => {
        auth.signInWithPopup(fbProvider)
    }

    //Dang nhap thanh cong
    auth.onAuthStateChanged((user) => {
        console.log({ user });
    })

    return (
    <div>
        <Row justify='center' style={{height: 800}} >
            <Col span={8}>
                <Title style={{textAlign: 'center'}} level={3} >Fun Chat</Title>
                <Button  style={{width:'100%', marginBottom: 5}} >
                    Đăng nhập bằng Google
                </Button>
                <Button onClick={handlefbLogin} style={{width:'100%'}} >
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    </div>
    )
}

export default Login
