import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

export default class Sensorsreg extends Component {
  register=()=>{
    console.log('reg');
    // axios({method:'',url:''})
    // .then((response)=>{
    //   console.log(response);
    // let data=response.data;
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
  }

  remove=()=>{
    console.log('removed');
    // axios({method:'',url:''})
    // .then((response)=>{
    //   console.log(response);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
  }

    hide=()=>{
        document.getElementById("deletetag").style.display=$("#deletetag").css("display") ==='block'?'none':'block'
    }

  render() {
    return (
      <> 
      <div
              style={{marginTop:'-17px',
              marginLeft:'60px'}} >
             <h3 className='subheading' style={{paddingTop:'30px'}}>Sensors Registration</h3>

             <div style={{width:'87px',height:'5px',background:'#FE5B1B',marginTop:'-15px',borderRadius:'3px'}}>
      </div>

      <form id="sensorreg" style={{marginTop:'-20px',marginTop:'20px',marginBottom:'50px'}}>
            
            
      <div className="inputdiv">
              <span className="label">System Name:</span>
              <select
                style={{width:'265px'}}
                name="sensorname"
                id="sensorname"
                required="required"
              >
               </select>
            </div>
        
            <div className="inputdiv">
              <span className="label">Sensor Name :</span>
              <input
                type="text"
                name="sensorname"
                id="sensorname"
                required="required"
               
              />
            </div>

            <div className="inputdiv">
              <span className="label">Sensor ID :</span>
              <input
                type="text"
                name="sensorid"
                id="sensorid"
                required="required"
              />
            </div>

            < div style={{display:'flex',marginTop:'55px',marginLeft:'50px'}}>

               <div style={{display:'flex',background:'#FE5B1B',width:'172px',height:'35px',borderRadius:'5px'}}>
               <div onClick={this.register}
                style={{marginLeft:'15px',marginTop:'5px',color:'white',cursor:'pointer'}}
              >  Register Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'white'}}
                     className="fas fa-file-plus"></i>
                  
             </div>
               </div>

               <div style={{display:'flex',background:'#FE5B1B',width:'172px',height:'35px',borderRadius:'5px',marginLeft:'70px'}}>
               <div
                style={{marginLeft:'15px',marginTop:'5px',color:'white',cursor:'pointer'}}
                    onClick={this.hide}
              >  Remove Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'white'}}
                     className="fas fa-file-times"></i>    
             </div>
               </div>
               </div>
          </form>

          <form id="deletetag"
            style={{marginBottom:'50px',display:'none'}}
          >
          <div className="inputdiv">
              <span className="label">Sensor ID :</span>
              <input
                type="text"
                name="systemmid"
                id="systemmid"
                required="required"
              />
            </div>
            <div style={{display:'flex',cursor:'pointer',background:'#FE5B1B',width:'172px',height:'35px',borderRadius:'5px',marginLeft:'262px',marginTop:'22px'}}>
               <div  onClick={this.remove}
                style={{marginLeft:'15px',marginTop:'5px',color:'white'}}
              >  Remove Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'white'}}
                     className="fas fa-file-times"></i>    
             </div>
               </div>
          </form>  
          
    </div>
    
      </>
    )
  }
}
