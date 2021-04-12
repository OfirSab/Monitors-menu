import React, { Component , Fragment } from "react";
import { NavItems } from '../data/Data'

class Legend extends Component {
    componentDidMount() {
        console.log(this.props.match.params.legendNumber);
        
    }
    componentDidUpdate(){
            if(this.state.legendNumber != this.props.match.params.legendNumber){
                console.log("change from:" + this.state.legendNumber + "to: " + this.props.match.params.legendNumber);
                this.state.legendNumber = this.props.match.params.legendNumber;
                
            }
    }
    state = {
        tags: [],
        colors:[],
        legendNumber: null,
    } 


    render(){
        const { tags, colors, legendNumber} = this.state
        console.log("legent from legend: " +legendNumber);
        NavItems.Legends.map((legend)=>{
            if(legend.Id == legendNumber){
                legend.tags.map((tag,index)=>{
                    tags.push(tag.Label)
                    colors.push({backgroundColor:tag.Color})
                })
                
            }
            })
        return (
         (legendNumber && <div className="container">
                <ul className="list-group">
              {tags.map((tag,index) => (
                <li key={index} className="list-group-item">
                    <div className="tag">
                        <div className="tag-color" style={ colors[index] } />
                        <p>{tag}</p>
                    </div>
                </li>
              ))}
            </ul>
          </div>)
        )
      }
    
    }

export default Legend
