import React from "react";
import { Button, Form, Input } from 'antd';
import { Link } from "react-router-dom";

function Register() {
    const onFinish = (values) => {
        console.log("Received values of form", values);
    };

    return (
        <div className='register'>
            <div className="registerform card">
                <h1 className="card-title">Welcome!</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input placeholder="Password" type="password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button className="btn my-3" htmlType="submit">REGISTER</Button>
                    </Form.Item>
                </Form>
                <Link to='/login' className="directLogIn">HAVE AN ACCOUNT? LOGIN</Link>
            </div>
        </div>
    );
}

export default Register;
