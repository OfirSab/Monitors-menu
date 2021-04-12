import React, { Component } from 'react'

export class Tag extends Component {
  render() {
      const {index,color,tag} = this.props
    return (
        <li key={index} className="list-group-item">
            <div className="tag">
                <div className="tag-color" style={ color } />
                <p>{tag}</p>
            </div>
        </li>
    )
  }
}

export default Tag
