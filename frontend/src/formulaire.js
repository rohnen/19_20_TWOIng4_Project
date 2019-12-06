import React, {Component} from 'react';



class Form extends Component{
    render(){
        return(
            <div className="form">
                <h1>Implémenter data</h1>

                <div className = "Nom">
                    <label>Ton nom :</label>
                    <input type="text"></input>
                </div>

                <div className = "Prénom">
                    <label>Ton prénom :</label>
                    <input type="text"></input>
                </div>

                <div className = "Pays">
                    <label>Ton pays :</label>
                    <input type="text"></input>
                </div>

                <div className = "Ville">
                    <label>Ta Ville :</label>
                    <input type="text"></input>
                </div>

                <div className = "button">
                    <button>Envoyer</button>
                </div>

            </div>

        );
    }
}
export default Form;