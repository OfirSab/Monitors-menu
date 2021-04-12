import React, { Component } from 'react'
import Item from './Item'
import { NavItems } from '../data/Data'
import {Link} from 'react-router-dom'

const Navbar = () => {
    var monitors = [];
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">MonitorsType</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {NavItems.MonitorType.map((navItem,index)=>{
                            monitors=[];
                            NavItems.Monitor.map((i)=>{
                                if(i.MonitorTypeId === navItem.Id){
                                monitors.push(i)
                                }
                            })
                        return <Item key={index} name={NavItems.MonitorType[index].Name} monitors={monitors} legendNumber={NavItems.MonitorType[index].LegentId}/>
                        })}
                    </ul>
                </div>
            </nav>

 

      </div>
    )
}

export default Navbar
