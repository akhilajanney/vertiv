import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import sidebar from './sidebar.css'
import $ from 'jquery'
import styles from '../styles.css'
export function  sidelinkClicked (id) {
    $('.sideLink').removeAttr("style");
    $("#" + id).css({
      "color": "red",
      "background": "linear-gradient(to right,  #c2451b63 , #4d4d4d)",
      "border-left": "3px solid #FE5B1B",
      "font-weight": "bold",
  });


 }

export default class Leftsidebar extends Component {
  componentDidMount(){
    sidelinkClicked('option0')
  }
  render() {
    return (
        <>
         <div className='sidebar'>
            {/* <Link to='/home'> */}
         <img src="/vertivlogo.png" alt="logo" 
            style={{
                width: '96%',
                marginTop: '11px',
                marginLeft: '13px',
                marginBottom:'30px',
                cursor:'pointer'
               }}
            />
            {/* </Link> */}
             <Link to='/home' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div style={{marginTop:'100px',color:'green'}}
                                           onClick={() => sidelinkClicked("option0")}
                                            className='sideLink'
                                            id="option0"
                                      >
                                            <i className="fas fa-home"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#FE5B1B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'white' }}>Home</span>
                                        </div>
                                    </span>
              </Link>
              
              <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option1")}
                                            className='sideLink'
                                            id='option1'
                                        >
                                            <i className="fas fa-edit"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#FE5B1B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'white' }}>Registartion</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/realtime' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option2")}
                                            className='sideLink'
                                            id="option2"
                                           >
                                            <i className="fas fa-map-marker-alt"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#FE5B1B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'white' }}>Realtime Tracking</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/alerts' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option3")}
                                            className='sideLink'
                                            id="option3"
                                          >
                                            <i className="fas fa-lightbulb-on"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#FE5B1B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'white' }}>Alerts</span>
                                        </div>
                                    </span>
              </Link>

              <Link to='/health' style={{ textDecoration: 'none' }}>
                                    <span>
                                        <div 
                                           onClick={() => sidelinkClicked("option4")}
                                            className='sideLink'
                                            id="option4"
                                           >
                                            <i className="fas fa-medkit"
                                                style={{
                                                    fontSize: '20px',
                                                    marginRight: '10px',
                                                    marginTop: "2px",
                                                    color:'#FE5B1B'
                                                }}>
                                            </i>
                                            <span style={{ fontSize: "17px",color:'white' }}>System Health</span>
                                        </div>
                                    </span>
              </Link>
        </div>
      </>
    )
  }
}
