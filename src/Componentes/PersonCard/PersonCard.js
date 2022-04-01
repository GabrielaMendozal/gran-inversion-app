import React from 'react';
import './PersonCard.css';

const PersonCard = props => {
    let {firstName, lastName,age,hairColor} = props;
            //const  =this.props;
            return(
                <div className='PersonCard'>
                    <h2>{lastName}, {firstName}</h2>
                    <h4> Age : {age} </h4>
                    <h5> Hair Color : {hairColor} </h5>
    
    
                </div>
            )
    
        }
    
        


export default PersonCard;