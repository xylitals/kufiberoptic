import { Table,Badge,InputGroup,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import Filldata from "./fiberlist"
import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import './style.css';
import Bottom from './bottom';
import { useHistory  } from 'react-router-dom';

const Search = () => {

  const [searchTerm, setsearchTerm] = useState([])
  const [product, setProduct] = useState([])
  const [station, setStation] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(product => setProduct(product))
      console.log(product)
  },[])

  
  useEffect(() => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
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

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">SEARCH</Card.Header>
            <Card.Body>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>รายการ:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="text" 
                  placeholder = "Search From Keyword"
                  onChange={(el)=>{
                    setsearchTerm(el.target.value);
                  }}
                />
                </InputGroup>
            </Card.Body>
            </Card>
            <br></br>
            <Button variant="warning">
              ผลลัพธ์ทั้งหมด <Badge variant="light">2</Badge> รายการ
              <span className="sr-only">unread messages</span>
            </Button>

          </Col>
          <Col></Col>

          </Row>
    </Container>

    <br></br>

    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
          <br></br>

          <Card>
            <Card.Header>
            <h3><Button variant="success" size="sm" href="/insert"><Icon.PlusCircle/>{' NEW'}</Button>{' รายการเส้นใยนำแสงภายในมหาวิทยาลัย'}</h3></Card.Header>
            <Card.Body>
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
              else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }

            }).map((el)=> {
                    return (
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
                    </tr>
                    );
            })}
            </tbody>
            </Table>
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>
    </Container>

    </div>
  );
}

export default Search;
