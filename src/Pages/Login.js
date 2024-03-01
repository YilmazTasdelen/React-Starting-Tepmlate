import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Card, Layout } from "antd";
import {
  UserOutlined,
  LockOutlined,  
  HeartTwoTone,
} from "@ant-design/icons";


const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div>
  <Layout style={{ height: "100vh" }}>
    <Row>
      <Col span={9}></Col>
      <Col span={6}> 
      <div className="site-card-wrapper">
      <Card
          bordered={false}
          style={{
          
            //height: 700,
            borderRadius: "16px",
            marginRight: "24px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            marginTop: "50px",
          }}
        >
          <div className="loginform">
            <Form
              style={{
                // padding: 10,
                // minWidth: 820,
                textAlign:"center"
              }}
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 55,
              }}
              initialValues={{
                remember: true,
              }}
              //onSubmit = {handleSubmit}
              //onFinish={handleLogin}
              //onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item>
                 <img
                  height={45}
                  src={require("./../Assets/logo.png")}
                /> 
              </Form.Item>

              <Form.Item
                label="Kullanıcı Adı"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Lütfen Kullanıcı Adınızı giriniz !",
                  },
                ]}
              >
                <Input
                  placeholder="Kullanıcı adı"
                  prefix={<UserOutlined />}
                  //value={username}
                  //onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Şifre"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Lütfen şifrenizi giriniz !",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Şifre"
                  prefix={<LockOutlined />}
                  //value={password}
                  //onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
                  {/* <Form.Item
                name="remember"
                valuePropName="checked"
                
                style={{
                  textAlign: "right",
                }}
                // wrapperCol={{
                //   offset: 8,
                //   span: 10,
                // }}
              >
            <Checkbox className="loginCheckbox">Beni hatırla</Checkbox> 
              </Form.Item>*/}
              <Form.Item
              // wrapperCol={{
              //   offset: 8,
              //   span: 10,
              // }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="loginbutton"
                  textAlign="right"
                >
                  Giriş Yap
                </Button>
              </Form.Item>
              <Form.Item>
                <div>
                  © 2022 Arvento Mobil Sistemler.
                  <i>
                    <HeartTwoTone twoToneColor="#eb2f96" />
                  </i>{" "}
                  by Arvento                    
                </div>
              </Form.Item>
            </Form>
          </div>
        </Card>  
        </div>                    
               
      </Col>
      <Col span={9}></Col>
    </Row>
  </Layout>
</div>


);
export default Login;