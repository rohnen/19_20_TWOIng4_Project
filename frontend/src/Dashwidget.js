import React, {Component} from 'react';
import { Container, Nav } from "./style";
import logo from './logo.svg';
import img from './img.png';
import './accueil.css';
import Widget from './Widget';
import Widget1 from './Widget1';


class Dashwidget extends Component {
    render(){
      return(
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
              <p className="nbre">20</p>
            </Container> 
          </Container> 

          <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Cours suivant : 
                </Container>
              </Container>  
              <p className="nbre">Cours de design thinking</p>
            </Container> 
          </Container>   

          <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Nombre de retard :
                </Container>
              </Container> 
              <p className="nbre">10</p>
            </Container> 
          </Container>   

          <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Nouvelle Note reçue :
                </Container>
              </Container> 
              <p className="nbre">20</p>
            </Container> 
          </Container>

        </Container>  
        
        {/*2ème rangée de 2 widgets avec recharts */}
        <Container className="row" style={{ minHeight: "100%" }}>

          <Container className="col-md-6 mb-4">
            <Container className="card is-card-dark chart-card">
              <p className="Widget">Camembert:</p>
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
      );
    }
  }

  export default Dashwidget;