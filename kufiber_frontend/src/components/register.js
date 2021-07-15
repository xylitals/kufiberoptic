import {Form,Button,Card,Container,Row,Col,Nav} from 'react-bootstrap';
import './style.css';
import Bottom from './bottom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Headbar from './headbar';

const Register = () => {

  const [regstatus, setregstatus] = useState('');
  const [regusername, setregusername] = useState('');
  const [regpassword, setregpassword] = useState('');

  const history = useHistory()

  const register =()=>{
    fetch("/register", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      username: regusername,
      password: regpassword,
    })
    
    axios.post("/register",{
      username: regusername,
      password: regpassword,
    }).then((res)=>{
      
    });
    
  }

  return (
    <div className="App-main">
          <Headbar></Headbar>
          <Container>
          <br></br><br></br><br></br><br></br>
          <Row>
          <Col></Col>
          <Col xs="7">
            <Card>
            <Card.Header as="h5">{"register"}</Card.Header>
            <Card.Body>
              <form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="string" 
                  placeholder="Enter User" 
                  onChange={(e)=>{setregusername(e.target.value)}}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  onChange={(e)=>{setregpassword(e.target.value)}}
                />
              </Form.Group>

              
              <Button onClick={register} variant="success" type="submit" href="/list">
                Create
              </Button>
            

              </form>
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>
          </Container>
          <Bottom></Bottom>
          
    </div>
  );
}

export default Register;
