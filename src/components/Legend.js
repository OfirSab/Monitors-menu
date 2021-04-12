import React, { Component , Fragment } from "react";
import { NavItems } from '../data/Data'
import Tag from './Tag'

class Legend extends Component {
    render(){
        var legendNumber = this.props.match.params.legendNumber
        if(legendNumber){
            var tags = [];
            var colors = [];
            var tagList = [];
            NavItems.Legends.map((legend)=>{
                if(legend.Id == legendNumber){
                    legend.tags.map((tag,index)=>{
                        tags.push(tag.Label)
                        colors.push({backgroundColor:tag.Color})
                    })
                }
                })
            tagList = tags.map((tag,index) => (
                <Tag tag={tag} key={index} index={index} color={colors[index]}/>
            ))
        return (
         (legendNumber && <div className="container">
                <ul className="list-group">
              {tagList}
            </ul>
          </div>)
        )
        }else{
            return <h2>Choose Monitor type</h2>
        }

      }
    
    }

export default Legend
