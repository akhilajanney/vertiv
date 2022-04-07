import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='maindiv'>

        <h1 style={{margin:'0px'}}>Dashboard</h1>
        <div style={{width:'100px',height:'5px',background:'#fe5b1bb3',marginTop:'0px',borderRadius:'3px'}}>
          </div>

        <div style={{display:'flex'}}>
          <Link to='/register'>
          <div>
            <img src="/images/registration.svg" alt=""
              className='card_img'
            />
          </div>
          </Link>
          <Link to='/realtime'>
          <div style={{marginLeft:'80px'}}>
            <img src="/images/tracking.svg" alt=""
             className='card_img'
            />
          </div>
          </Link>
        </div>

        <div style={{display:'flex'}}>
        <Link to='/alerts'>
          <div>
            <img src="/images/Alerts.svg" alt="" 
             className='card_img'
            />
          </div>
          </Link>
          <Link to='/health'>
          <div  style={{marginLeft:'80px'}}>
            <img src="/images/health.svg" alt="" 
             className='card_img'
            />
          </div>
          </Link>
        </div>

      </div>
    )
  }
}
