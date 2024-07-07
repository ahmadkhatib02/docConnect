import React from "react";
import { Button, Form, Input } from 'antd';
import { Link } from "react-router-dom";

function Login() {
    const onFinish = (values) => {
        console.log("Received values of form", values);
    };

    return (
        <div className='register'>
            <div className="registerform card">
                <h1 className="card-title">You're Finally Back!</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input placeholder="Password" type="password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button className="btn my-3" htmlType="submit">LOGIN</Button>
                    </Form.Item>
                </Form>
                <Link to='/register' className="directLogIn">DON'T HAVE AN ACCOUNT? REGISTER</Link>
            </div>
        </div>
    );
}

export default Login;
