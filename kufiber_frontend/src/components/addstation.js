import {Toast,ListGroup,Modal,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron,InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Bottom from './bottom';

const Filldata = () => {
  const history = useHistory();
  const [station, setStation] = useState([])
  useEffect(() => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
  },[])
  const Del = (dataid) =>
  {
    if(window.confirm('are  you sure?'))
    {
      fetch('/station/'+dataid, 
      { method: 'DELETE' ,
        header: {'Accept':'application/json','Content-Type':'application/json'}
      })
    }
  }

  const ed = (eventId) => {
    history.push({
      pathname: '/editstation/' + eventId
    })
  }
  
  return (
      <div>
            <Container>
            <Row>
            <Col></Col>
            <Col xs="10">
                  <br></br>
                  <ListGroup  as="ul" >
                  <div>
                  {station.sort(function(a,b){
                            a.name = a.name.toLowerCase();
                            b.name = b.name.toLowerCase();
                            if(a.name>b.name){
                              return 1;}
                            else if(a.name<b.name){
                              return -1;}
                            else {
                              return 0;}
 
                          }).map( el=> (
                  <span key={el.id}>
                  <ListGroup.Item  as="ul">
                  <Row>
                  <Col xs="10"><Icon.GeoAltFill/>{" "}{el.name}</Col>
                  <Col xs="2">
                    <div className="right">
                    <Button variant="danger" type="submit" size="sm" onClick={()=>Del(el._id)} href="/addstation">
                      <Icon.Trash/>
                    </Button>{' '}
                    <Link  onClick = {()=>ed(el._id)}>
                        <Button type="submit" variant="warning"  size="sm" >
                        <Icon.PencilSquare/>
                        </Button>
                    </Link>
                    </div>
                  </Col>
                  </Row>
                  </ListGroup.Item>
                  
                  </span>
                  ))}
                  </div>
                  </ListGroup>
            </Col>
            <Col></Col>
            </Row>
            </Container>
      </div>
    );
}

const Addstation = () => {
  
  const [name, setName] = useState('');
  const handleSubmit = () => {
    if(window.confirm('are  you sure?')){
   
    const blog = { name };

    fetch('/station', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
  }

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="10">
            <Card>
            <Card.Header as="h5">เพิ่มสถานที่</Card.Header>
            <Card.Body>
                
                <form>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>station</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </InputGroup>
                <Button variant="warning" type="submit" onClick={handleSubmit} href="/addstation">เพิ่ม</Button>
                {' '}<Button type="submit" 
                            variant="dark"
                            href="https://www.google.co.th/maps/place/%E0%B8%A1.%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%99/@13.8434899,100.5717821,15.85z/data=!4m9!1m2!2m1!1z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiB4Lip4LiV4Lij4Lio4Liy4Liq4LiV4Lij4LmMIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4lQ!3m5!1s0x30e29d1e111be769:0x4332e8cd6aec8c31!8m2!3d13.8484754!4d100.5723925!15sClvguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguYDguIHguKnguJXguKPguKjguLLguKrguJXguKPguYwg4Lin4Li04LiX4Lii4Liy4LmA4LiC4LiVIgOIAQGSAQZzY2hvb2w"  
                             >
                        <Icon.MapFill/>{" Google Map"}
                </Button>

                </form>

            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>

    <Filldata></Filldata>
    </Container>
    <Bottom></Bottom>
    </div>
  );
}

export default Addstation;