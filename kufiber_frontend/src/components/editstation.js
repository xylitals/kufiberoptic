import {Toast,ListGroup,Modal,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron,InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Bottom from './bottom';

const Editstationfeed = () => {
  const {id} = useParams();

  const [mystation, setmyStation] = useState([])
  useEffect(() => {
    fetch('/station/'+id)
      .then(res => res.json())
      .then(mystation => setmyStation(mystation))
      console.log(mystation)
  },[])
  
  const [station, setStation] = useState([])
  useEffect(() => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
  },[])
  
  const [name,setname] = useState(mystation.name);
  const handleSubmit = () => {
    if(window.confirm('are  you sure?')){
      const blog = {name}
      fetch('/station/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
      })
    }
  }

  

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

  /*const history = useHistory();
  const ed = (eventId) => {
    history.push({
      pathname: '/editstation/' + eventId
    })
  }*/

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">แก้ไขชื่อสถานที่</Card.Header>
            <Card.Body>
                <p>
                <form>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>station</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  defaultValue={mystation.name}
                  onChange={(e) => setname(e.target.value)}
                />
                </InputGroup>
                {' '}<Button type="submit" onClick={handleSubmit} href="/addstation" variant="warning">แก้ไขรายการ</Button>
                {' '}<Button type="submit" href="/addstation" variant="danger">ยกเลิก</Button>
                </form>
                </p>
                
                
                

            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>
          
            </Container>
            <Bottom></Bottom>


            {/*<Container>
            <Row>
            <Col></Col>
            <Col xs="10">
                  <br></br>
                  <ListGroup  as="ul" >
                  <div>{station.map( el=> (
                  <span key={el.id}>
                  <ListGroup.Item  as="ul">
                  <Row>
                  <Col xs="10"><Icon.GeoAltFill/>{" "}{el.name}</Col>
                  <Col xs="2">
                    <Button variant="danger" type="submit" size="sm" onClick={()=>Del(el._id)} href="/addstation">
                      <Icon.Trash/>
                    </Button>{' '}

                  
                    <Button type="submit" variant="warning"  size="sm" href={'/editstation/'+id}>
                    <Icon.PencilSquare/>
                    </Button>
                  

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
                  </Container>*/}
                
    </div>
  );
}

export default Editstationfeed;
