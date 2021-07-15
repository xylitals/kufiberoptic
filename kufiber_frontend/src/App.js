import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/loginpage"
import Main from "./components/mainpage"
import Add from "./components/add"
import Search from "./components/searchandlist"
import Editstationfeed from "./components/editstation"
import Addstation from "./components/addstation"
import Map from "./components/map"
import List from "./components/fiberlist"
import Datapage from "./components/productdetale"
import Edit from "./components/editproduct"
import Adjust from "./components/adjust";
import FileUpload from "./components/FileUpload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/register';
import RepairList from './components/repairlist';
import Hello from './components/hello';


const App = () => {
    
    return (
        <main>
            <Switch>
                {/*<Route path="/login" component={Login} />*/}
                <Route path="/main" component={Main} exact />
                <Route path="/insert" component={Add} />
                <Route path="/search" component={Search} />
                <Route path="/adjust" component={Adjust} />
                <Route path="/addstation" component={Addstation} />
                <Route path="/map" component={Map} />
                <Route path="/list" component={List} />
                <Route path="/product/:id" component={Datapage}/>
                <Route path="/editproduct/:id" component={Edit}/>
                <Route path="/editstation/:id" component={Editstationfeed}/>
                <Route path="/upload" component={FileUpload}/>
                <Route path="/register" component={Register}/>
                <Route path="/repairlist" component={RepairList}/>
            </Switch>
        </main>
    )
}

export default App;