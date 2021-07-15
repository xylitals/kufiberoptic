import { InputGroup,ListGroup,Table,Badge,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
//import Datapage from "./productdetale"
import { useHistory  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Bottom from './bottom';


const Filldata = () => {
  const [product, setProduct] = useState([])
  const history = useHistory();
  const [searchTerm, setsearchTerm] = useState([])
 

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(product => setProduct(product))
      console.log(product)
  },[])

  
  const Del = (dataid) =>
  {
    if(window.confirm('จะลบช้ะะะะ?'))
    {
      fetch('/products/'+dataid, 
      { method: 'DELETE' ,
        header: {'Accept':'application/json','Content-Type':'application/json'}
      })
    }
  }
  
  const see = (eventId) => {
    history.push({
      pathname: '/product/' + eventId
    })
  }

  const ed = (eventId) => {
    history.push({
      pathname: '/editproduct/' + eventId
    })
  }

  const count = product.filter((v)=>{
    if (searchTerm == ''){
      return v
    }
    else if(
      (v.name.toLowerCase().includes(searchTerm.toLowerCase()))
      || (v.station1.toLowerCase().includes(searchTerm.toLowerCase()))
      || (v.station2.toLowerCase().includes(searchTerm.toLowerCase()))
    ){
      return v
    }

  }).length
  

  return (
      <div>
            <Container>
            <Row>
            <Col></Col>
            <Col xs="12">
            
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend size="sm">
                <InputGroup.Text size="sm">รายการ:</InputGroup.Text>
                </InputGroup.Prepend >
                <FormControl 
                  size="sm"
                  type="text" 
                  placeholder = "Search From Keyword"
                  onChange={(el)=>{
                    setsearchTerm(el.target.value);
                  }}
                />
                </InputGroup>
                  
                <Button variant="warning" size="sm">
                ผลลัพธ์ทั้งหมด <Badge variant="light">{count}</Badge> รายการ
                <span className="sr-only">unread messages</span>
                </Button>
                <br/>
                  <br></br>
                  <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>รายการ</th>
                            <th>ต้นทาง</th>
                            <th>ปลายทาง</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>

                         {product.filter((val)=>{
                            if (searchTerm == ''){
                              return val
                            }
                            else if(
                              (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                              || (val.station1.toLowerCase().includes(searchTerm.toLowerCase()))
                              || (val.station2.toLowerCase().includes(searchTerm.toLowerCase()))
                            ){
                              return val
                            }

                          }).sort(function(a,b){
                            a.name = a.name.toLowerCase();
                            b.name = b.name.toLowerCase();
                            if(a.name>b.name){
                              return 1;}
                            else if(a.name<b.name){
                              return -1;}
                            else {
                              return 0;}
 
                          }).map(el=> (
                          <tr key={el.id}>
                            <td> {el.name}{' '}<Badge variant="secondary">{el.status}</Badge> </td>
                            <td> {el.station1} </td>
                            <td> {el.station2} </td>
                            <td>
                            <div className="center">
                            {' '}
                            <Link  
                                  onClick = { () => see(el._id) }
                                  
                            >
                                  <Button type="submit" variant="primary" size="sm" >
                                  <Icon.ArrowDownRightCircle/>{' รายละเอียด'}
                                  </Button>
                            </Link>
                            {' '}
                            <Link  
                                  onClick = { () => ed(el._id) }
                                  target="_blank"
                            >
                                  <Button type="submit" variant="warning"  size="sm" >
                                  <Icon.PencilSquare/>
                                  </Button>
                            </Link>
                            {' '}
                            <Button variant="danger" type="submit" size="sm" onClick={()=>Del(el._id)} href="/list">
                              <Icon.Trash/>
                            </Button>
                            </div>
                            </td>
                          </tr>)
                          )}
                          </tbody>
                      </Table>
                    <br></br>
                  
            </Col>
            <Col></Col>
            </Row>
            </Container>
      </div>
    );
}

const List = () => {
  return (
    
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
          <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header>
            <h3><Button variant="success" size="sm" href="/insert"><Icon.PlusCircle/>{' NEW'}</Button>{' รายการเส้นใยนำแสงภายในมหาวิทยาลัย'}</h3></Card.Header>
            <Card.Body>
              
              
              <Filldata></Filldata>
              
                
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

export default List;
