import React from 'react';
import './App.css';

function Card(props) {
    console.log('Props',props.data)
  return (
    <div className="card">
      <div className="card-title">{props.data.name.first}</div>
      {/* <div className="card-address">
        <p>Street: {props.address.street}</p>
        <p>Suite: {props.address.suite}</p>
        <p>City: {props.address.city}</p>
        <p>Zipcode: {props.address.zipcode}</p>
        <p>Latitude: {props.address.geo.lat}</p>
        <p>Longitude: {props.address.geo.lng}</p>
      </div> */}
    </div>
  );
}

export default Card;
