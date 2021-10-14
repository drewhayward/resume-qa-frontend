import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'

export default function App() {
  return (
    <p>Under construction...</p>
    // <Router basename='/'>
    //   <div>
    //     {/* <Navbar /> */}
    //     <Container style={{"paddingBottom": '60px'}} fluid='md'>
    //       <Switch>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </Container>
    //     <Footer />
    //   </div>
    // </Router>
  );
}