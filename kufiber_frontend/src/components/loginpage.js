/*import {Form,Button,Card,Container,Row,Col,Nav} from 'react-bootstrap';
import './style.css';
import Bottom from './bottom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const [loginstatus, setloginstatus] = useState('');
  const [logusername, setlogusername] = useState('');
  const [logpassword, setlogpassword] = useState('');

  const [regstatus, setregstatus] = useState('');
  const [regusername, setregusername] = useState('');
  const [regpassword, setregpassword] = useState('');

  const history = useHistory()
  
  useEffect(() => {
    gotlogin();
  },[])

  const gotlogin =()=>{
      fetch("/login")
      .then(res => res.json())
      .then((res)=>{
        if (res.data.message === "go") {
          history.push({
            pathname : '/main'
          })
        }
        else{
          history.push({
            pathname : '/login'
          })
        }
        setloginstatus(res.data.message);
      }
      );
  }
  
  const register =()=>{
    axios.post("/register",{
      username: regusername,
      password: regpassword,
    }).then((res)=>{
      
    });
  }

  const login =()=>{
    axios.post("/login",{
      username: logusername,
      password: logpassword,
    }).then((res)=>{
      
    });
    fetch("/login", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      username: logusername,
      password: logpassword,
    })
  }

  return (
    <div className="App-main">
          <Container>
          <br></br><br></br><br></br><br></br>
          <Row>
          <Col></Col>
          <Col xs="7">
            <Card>
            <Card.Header as="h5">{"Admin Login"}</Card.Header>
            <Card.Body>
              <form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="string" 
                  placeholder="Enter User" 
                  onChange={(e)=>{setlogusername(e.target.value)}}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  onChange={(e)=>{setlogpassword(e.target.value)}}
                />
              </Form.Group>

              
              <Button onClick={login} variant="success" type="submit">
                login
              </Button>
            

              </form>
            </Card.Body>
            </Card>
            <br></br><br></br><br></br>
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

              
              <Button onClick={register} 
              variant="success" type="submit">
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

export default Login;

*/
