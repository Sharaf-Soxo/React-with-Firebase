import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { collection, addDoc } from "firebase/firestore"; 
import './LoginPage.css'
import React, { useState } from "react";
import { db } from "./Firebase";


const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    setEmail("");
    setPassword("");
    addUser();

  };

   async function addUser(){ 
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        email: email,
        password: password,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    }

  return (
    <div>
     <div className='firstrow'>
      <h1>Get in Touch</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor.</h3>
     </div>
    <div className='secondrow'>
        <div className='Form'>
        <Form onFinish={handleSubmit}
          className="login-form">
          <Form.Item
            name="Email"
        rules={[
          {
            required: true,
            message: 'Please add your Email!',
          },
        ]}>
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please add your Password!',
          },
        ]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="https://abcd.com">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="submit" htmlType="submit" className="login-form-button" style={{ background: "#00308F"}}>
          Login
        </Button>
        Or &nbsp; <a href="https://abcd.com">Register now!</a>
      </Form.Item>
   </Form>
      </div>
    </div>
   </div>
  )
}

export default LoginPage;