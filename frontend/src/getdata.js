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



class List extends React.Component{
    
    constructor(props){

        super(props);
        this.state ={
            users :[],
            usersloc: [],
            userspih :[],
            usershs :[],
            location: '',
            pih: '',
            hs: '',
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
               {this.state.location}
               {this.state.pih}
               {this.state.hs}
               
               
               </div>
            
       )
    }
}
export default List;