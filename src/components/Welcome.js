import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
        <div class="welcome">
          <h3 class="display-5">Monitors Types Introducer</h3>
          <p>This site present the monitors type of the Json file.</p>
          <p>To see the lagend of each monitor please select monitor from the dropdown list</p>
        </div>
    )
  }
}

export default Welcome
