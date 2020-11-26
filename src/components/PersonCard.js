import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
    var {first_name, last_name, age, hair_color} = this.props;
        return (
        <div>
        <h1>{last_name}, {first_name}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hair_color}</p>
        </div>
   
    )}
}
    
export default PersonCard;