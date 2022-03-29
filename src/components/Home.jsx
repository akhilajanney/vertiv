import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div style={{float: "right", width: "90%",
      marginTop: '94px',
      marginBottom: "30px",
      marginRight:'-116px'}}>

        <h1 style={{margin:'0px'}}>Dashboard</h1>
        <div style={{width:'100px',height:'5px',background:'#FE5B1B',marginTop:'0px',borderRadius:'3px'}}>
          </div>

        <div style={{display:'flex'}}>
          <Link to='/register'>
          <div>
            <img src="/images/registration.svg" alt=""
            style={{width:'250px'}}
            />
          </div>
          </Link>
          <Link to='/realtime'>
          <div style={{marginLeft:'80px'}}>
            <img src="/images/tracking.svg" alt=""
             style={{width:'250px'}}
            />
          </div>
          </Link>
        </div>

        <div style={{display:'flex'}}>
        <Link to='/alerts'>
          <div>
            <img src="/images/alerts.svg" alt="" 
             style={{width:'250px'}}
            />
          </div>
          </Link>
          <Link to='/health'>
          <div  style={{marginLeft:'80px'}}>
            <img src="/images/health.svg" alt="" 
             style={{width:'250px'}}
            />
          </div>
          </Link>
        </div>

      </div>
    )
  }
}
