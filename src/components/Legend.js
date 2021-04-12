import React, { Component , Fragment } from "react";
import { NavItems } from '../data/Data'

class Legend extends Component {
    state = {
        tags: []
    } 

    render(){
        NavItems.Legends.map((legend)=>{
            if(legend.Id == this.props.legendId){
                legend.tags.map((tag,index)=>{
                    this.state.tags.push(tag.Label)
                    console.log(tag.Label);
                    <li key={index}>{tag.Label}</li>;
                })
                
            }
            })
            console.log("tags:"+this.state.tags);
        console.log(this.props.legendId);
        return (
          <div className="container">
                <ul className="list-group">
              {this.state.tags.map((tag,index) => (
                <li key={index} className="list-group-item">
                    <div className="tag">
                        <div className="tag-color"/>
                        <p>{tag}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    
    }

export default Legend
