//import React from 'react';
import React, {Component} from 'react';
import { Container, Nav } from "./style";
import logo from './logo.svg';
import img from './img.png';
import './App.css';
import './accueil.css';
import Widget from './Widget';
import Widget1 from './Widget1';

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
                <a> Bonjour Etudiant! </a>
              </span>
              <span className="logo-search">
                <img src={img} className="rounded-circle" alt="user" />
              </span>
          </Container>
        </Container>
      </Nav>

      
      <Nav className="navbar fixed-top nav-secondary is-dark is-light-text">
          <Container className="text-medium">Widgets</Container>
          <Container className="text-medium">Incrementer</Container>
      </Nav>

      <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/*1ère rangée de 4 widgets*/}
          <Container className="row">

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Nombre d'absences :
                  </Container>
                </Container>
                <p clasName="nbre">20</p>
              </Container> 
            </Container> 

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Cours suivant : 
                  </Container>
                </Container>  
                <p clasName="nbre">Cours de design thinking</p>
              </Container> 
            </Container>   

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Nombre de retard :
                  </Container>
                </Container> 
                <p clasName="nbre">10</p>
              </Container> 
            </Container>   

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Nouvelle Note reçue :
                  </Container>
                </Container> 
                <p clasName="nbre">20</p>
              </Container> 
            </Container>

          </Container>  
          
          {/*2ème rangée de 2 widgets avec recharts */}
          <Container className="row" style={{ minHeight: "100%" }}>

            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <p className="Widget">Camemebert:</p>
                <Container className="chart-container large full-height">
                  <Widget/>
                </Container>
              </Container>
            </Container>  

            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <p className="Widget">Camembert:</p>
                <Container className="chart-container large full-height">
                  <Widget1/>
                </Container>
              </Container>
            </Container>

          </Container> 

        </Container> 

  </Container>

    );
  }
}

export default App;
