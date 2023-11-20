import React from "react";
import {Form, Stack, Alert, Button, Row, Col} from "react-bootstrap";
const Registration = () => {
  return (
    <>
    <Form className="align-items-center">
    <Row style = {{
      height: "100vh",
      justifyContent:"center",
      paddingTop: "15%"
    }}>
      <Col xs ={3}>
      <Stack gap = {3}>
      <h2 className="mb-5">Create an Account</h2>
      <Form.Control type= "text" placeholder = "Name" />
      <Form.Control type= "email" placeholder = "Email" />
      <Form.Control type= "password" placeholder = "Password" />
      <Button className="Registerbtn" variant="primary" type = "submit" >
        Register
      </Button>
      </Stack>
      </Col>
    </Row>
   
    </Form>
      
    </>
  );
};

export default Registration;
