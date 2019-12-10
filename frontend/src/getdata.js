import React from 'react';
import axios from 'axios';
import { Container, Nav } from "./style";



const User = props => (
	<tr>

		<td> {props.user.location}</td>
		<td> {props.user.personsInHouse}</td>
		<td> {props.user.houseSize}</td> 
         
	</tr>
)



class Getdata extends React.Component{
    
    constructor(props){

        super(props);
        this.state ={
            location: '',
            pih: '',
            hs: '',
            location2: '',
            pih2: '',
            hs2: '',
            location3: '',
            pih3: '',
            hs3: '',
            location4: '',
            pih4: '',
            hs4: '',
        };
    }
    
    

    componentDidMount(){
        
        axios.get(`/user/`+'5ddb94c6fc13ae640c000014')
        .then (res => {
            console.log(res);
            this.setState({ location : res.data.location,
                            pih : res.data.personsInHouse,
                            hs : res.data.houseSize,
                            
                        })
        })
        axios.get(`/user/`+'5ddb94c6fc13ae640c000015')
        .then (res => {
            console.log(res);
            this.setState({ location2 : res.data.location,
                            pih2 : res.data.personsInHouse,
                            hs2 : res.data.houseSize,
                            
                        })
        })
        axios.get(`/user/`+'5ddb94c6fc13ae640c000016')
        .then (res => {
            console.log(res);
            this.setState({ location3 : res.data.location,
                            pih3 : res.data.personsInHouse,
                            hs3 : res.data.houseSize,
                            
                        })
        })
        axios.get(`/user/`+'5ddb94c6fc13ae640c000017')
        .then (res => {
            console.log(res);
            this.setState({ location4 : res.data.location,
                            pih4 : res.data.personsInHouse,
                            hs4 : res.data.houseSize,
                            
                        })
        })
        
    }

    userList()
	{
		return this.state.users.map(currentUser =>
		{
            return <User user={currentUser} key={currentUser._id}/>;
            
		})
    }
    
    
    render(){
        return(
                <div>
               <Container className="row">

<Container className="col-lg-3 col-sm-6 is-light-text mb-4">
    <Container className="card grid-card is-card-dark">
        <Container>
      <Container className="card-heading">
        <Container className="is-dark-text-light letter-spacing text-small">
            Id : 1
        </Container>
            Location :{this.state.location}
      </Container>
            personsInHouse :{this.state.pih}
      </Container>
            houseSize : {this.state.hs}
     </Container>
</Container> 

<Container className="col-lg-3 col-sm-6 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container>
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                  Id : 2
                </Container>
                Location : {this.state.location2}
              </Container>
              PersonInhouse : {this.state.pih2}
              </Container>
              Housesize : {this.state.hs2}
            </Container>
</Container>   

  <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
    <Container className="card grid-card is-card-dark">
      <Container>
      <Container className="card-heading">
        <Container className="is-dark-text-light letter-spacing text-small">
          Id : 3
        </Container>
        Location : {this.state.location3}
      </Container>
      PersonInhouse : {this.state.pih3}
      </Container>
      Housesize : {this.state.hs3}
    </Container>
  </Container>  

  <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
    <Container className="card grid-card is-card-dark">
      <Container>
      <Container className="card-heading">
        <Container className="is-dark-text-light letter-spacing text-small">
          Id : 4
        </Container>
        Location : {this.state.location4} 
      </Container>
      PersonInhouse : {this.state.pih4} 
      </Container>
      Housesize : {this.state.hs4}
    </Container>
  </Container> 

</Container>  
               </div>
            
       )
    }
}
export default Getdata;
