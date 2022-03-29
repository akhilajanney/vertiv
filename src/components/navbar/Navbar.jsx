import React, { Component } from 'react'
import header from './header.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='header'>
            {/* <img src="/vertivlogo.png" alt="logo" 
            style={{
                width: '10%',
                marginTop: '16px',
                marginLeft: '50px',
                cursor:'pointer'
               }}
            /> */}
            <div style={{float:'right'}}>
            <i style={{    marginRight: '24px',
                           marginTop: '12px',
                          color:'#FE5B1B',
                          fontSize:'25px'
                        }}
            className="fas fa-sign-out-alt"></i>
            </div>
        </div>
      </>
    )
  }
}
