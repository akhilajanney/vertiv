import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import styles from './styles.css'
import $ from 'jquery'
import axios from 'axios'

export default class Alerts extends Component {
    componentDidMount(){
        sidelinkClicked('option3')


      }
  render() {
    return (
      <div
      style={{
        float: "right", width: "90%",
        marginTop: '94px',
        marginBottom: "30px",
        marginRight:'-116px'
      }}
      >
          <h1>alerts</h1>
          <div style={{width:'60px',height:'5px',background:'#FE5B1B',marginTop:'-20px',borderRadius:'3px',marginBottom:'30px'}}>
              </div>

              {/* <div className="inputdiv">
              <span className="label">Alert Type:</span>
              <select
                
                name="sensorname"
                id="sensorname"
                required="required"
               
              >
               <option >Temperature</option>
               <option  >Low Battery</option>
               </select>
            </div> */}

              <table style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>SENSOR ID</th>
                    <th>SYSTEM NAME</th>
                    <th>ALERT TYPE</th>
                    <th>LAST SEEN</th>
                    
                  </tr>
                </thead>
                <tbody id="alert"></tbody>
              </table>
      </div>
    )
  }
}
