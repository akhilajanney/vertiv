import React, { Component } from 'react'
import header from './header.css'

export default class Navbar extends Component {
  logout=()=>{

    console.log('logout----');
        sessionStorage.removeItem('login')
            window.location.pathname='/login'
}
  render() {
    return (
      <>
        <div className='header'>
            <div style={{float:'right'}} onClick={this.logout}>
            <i style={{    marginRight: '24px',
                           marginTop: '12px',
                          color:'#fe5b1bb3',
                          fontSize:'25px',
                          cursor:'pointer'
                        }}
            className="fas fa-sign-out-alt"></i>
            </div>
        </div>
      </>
    )
  }
}
