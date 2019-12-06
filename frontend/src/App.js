//import React from 'react';
import React, {Component} from 'react';
import { Container, Nav } from "./style";
import logo from './logo.svg';
import img from './img.png';
import './App.css';
import './accueil.css';
import Form from './formulaire';
import Dashwidget from './Dashwidget';
import Routes from './routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
    return(
    <Container>

      {/*Menu horizontal tout en haut */}
      <Nav className="navbar navbar-expand-md is-purple">
        <Container className="navbar-brand">
            <a>Online Dashboard</a>
        </Container>
        <Container className="navbar-nav ml-auto">
          <Container className="user-detail-section">
              <span className="pr-2">
                <a> Objets connectés! </a>
              </span>
              <span className="logo-search">
                <img src={img} className="rounded-circle" alt="user" />
              </span>
          </Container>
        </Container>
      </Nav>

      
      <Nav className="navbar fixed-top nav-secondary is-dark is-light-text">
          <Container className="text-medium"><button><Link to="/Dashwidget">Widgets</Link></button></Container>
          <Container className="text-medium"><button><Link to="/form">Incrementer</Link></button></Container>
      </Nav>
      <Routes/>
     
  </Container>

    );
  }
}

export default App;
