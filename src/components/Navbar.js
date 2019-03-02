import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  // width: '100px',
  // padding: '12px',
  margin: '10px 6px 6px 10px',
  background: 'green',
  textDecoration: 'none',
  color: 'white'
}

const NavigationBar = () => {
  return (
    <div className="Navbar">
      <NavLink
        to="/"
        exact
        style={linkStyle}
        activeStyle={{
          background: 'green'
        }}
        >Home</NavLink>
      <NavLink
        to="/crops"
        exact
        style={linkStyle}
        activeStyle={{
          background: 'green'
        }}
        >Crops</NavLink>
        <NavLink
        to="/crops/new"
        exact
        style={linkStyle}
        activeStyle={{
          background: 'green'
        }}
        >Add a Crop</NavLink>
    </div>

  )
}

export default NavigationBar