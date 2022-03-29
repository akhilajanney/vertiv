import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'

export default class Realtime extends Component {
    componentDidMount(){
        sidelinkClicked('option2')
      }
  render() {
    return (
      <div 
      style={{
        float: "right", width: "80%",
        marginTop: '94px',
        marginBottom: "30px",
        marginRight:'23px'
      }}
      >
          <h1>Realtime Tracking</h1>
          <div style={{width:'134px',height:'5px',background:'#FE5B1B',marginTop:'-20px',borderRadius:'3px'}}>
          </div>

          <div className='row' style={{justifyContent:'space-between',marginTop:'25px',width:'88%'}}>
            <div>
            <img style={{width:'280px',cursor:'pointer'}}src="/images/Sys1.png" alt="" />
            </div>
            <div>
            <img style={{width:'280px',cursor:'pointer'}}src="/images/Sys2.svg" alt="" />
            </div>
            <div>
            <img style={{width:'280px',cursor:'pointer'}}src="/images/Sys3.svg" alt="" />
            </div>
          </div>

          <div className='row' style={{marginTop:'25px',width:'625px'}}>
          <div>
            <img style={{width:'280px',cursor:'pointer'}}src="/images/Sys4.svg" alt="" />
            </div>
            <div style={{marginLeft:'60px'}}>
            <img style={{width:'280px',cursor:'pointer'}}src="/images/Sys5.svg" alt="" />
            </div>
            </div>

      </div>
    )
  }
}
