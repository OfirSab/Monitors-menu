import React, { Component } from 'react'
import Item from './Item'
import { NavItems } from '../data/Data'

const Navbar = () => {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">MonitorsType</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">About</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Services</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Photography</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Location</a>
                    </li>
                </ul>
            </div>
        </nav> */}


<nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">MonitorsType</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {NavItems.map((navItem,index)=>{
                    return <Item key={index} items={navItem}/>
                    })}
                    {/* <li className="nav-item active">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Services</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Photography</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Location</a>
                    </li> */}
                </ul>
            </div>
        </nav>

 

      </div>
    )
}

export default Navbar
