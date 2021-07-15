import { Navbar,Nav,Form,Button,FormControl,Card,NavDropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './style.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Headbar = () => {
  const history = useHistory()

  /*const Gotlogout =()=>{
    Axios.get("/logout")
    .then(
      history.push({
        pathname : '/login'
      })
    );
  }*/

  const Logout=()=> {
    localStorage.clear();
    window.location.href = '/login';
}
  
  return (
    <div className="App-main">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">KUfiber</Navbar.Brand>
      <Nav className="mr-auto" variant="pills">
      <Nav.Link href="/main">About</Nav.Link>
      <Nav.Link href="/list">List</Nav.Link>
      <Nav.Link href="/repairlist">Repairlist</Nav.Link>
      <Nav.Link href="/insert"><Icon.PlusCircle/>{" New"}</Nav.Link>
      <Nav.Link href="/addstation"><Icon.PlusCircle/>{" Addplace"}</Nav.Link>
      <Nav.Link href="/register"><Icon.PlusCircle/>{" register"}</Nav.Link>
      
      </Nav>

      <Form inline>
      <Navbar.Brand></Navbar.Brand>
      <Button variant="light" 
              href="/login" 
              size="sm"
              onClick={Logout}
      >
      <Icon.BoxArrowRight/></Button>
      </Form>
      </Navbar>
    </div>
  );
}

export default Headbar;
