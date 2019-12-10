import React, {Component} from 'react';




class Form extends Component{
    render(){
        return(
            
            <div className="form">
                <h1>Formulaire pour users</h1>  
                <tr>
                    <td>
                        <div className = "location">
                        <label>La location :</label>
                        <input type="text"></input>
                        </div>
                    </td>
                    <td>
                        <div className = "personInhouse">
                        <label>le nombre de personne :</label>
                        <input type="text"></input>
                        </div>
                    </td>
                    <td>
                        <div className = "HouseSize">
                        <label>La taille de la maison :</label>
                        <input type="text"></input>
                        </div>
                    </td>    
                    <td>
                        <div className = "button">
                        <button>Envoyer</button>
                        </div>
                    </td>    
                </tr>  
            
            </div>
            
        );
    }
}
export default Form;
