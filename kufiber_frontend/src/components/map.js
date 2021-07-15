import React from "react";
import { Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polygon
} from "react-google-maps";
import Headbar from './headbar';

class Map extends React.Component {
  path = [
    { lat: 13.847039, lng: 100.5694708 },
    { lat: 13.8470245, lng: 100.5698754 }
  ];
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16} 
        defaultCenter={{ lat: 13.847039, lng: 100.5694708 }}
      >
        <Polygon path={this.path} options={{ strokeColor: "#FF0000 " }} />
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <div>
  <Headbar></Headbar>
  <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">Map</Card.Header>
            <Card.Body>
            <MapComponent
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px`, width: "500px" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>      
        </Container>
  </div>
);
