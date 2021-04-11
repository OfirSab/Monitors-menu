import React , {Fragment} from 'react'
import { NavItems } from '../data/Data'

const Legend = (legendId) => {
    const li = []
    return (
      <div className="container">
          <ul>
            {NavItems.Legends.map((legend,index)=>{
                if(legend.Id == legendId.legendId){
                    legend.tags.map((tag,index)=>{
                        console.log(tag.Label);
                        li.push(`<li key=${index}>${tag.Label}</li>`);
                    })
                    
                }
                })}
                {/* {li.map(row =>{ return row})} */}
            </ul>
      </div>
    )
  }


export default Legend
