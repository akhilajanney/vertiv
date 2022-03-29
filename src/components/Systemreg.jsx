import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

export default class Systemreg extends Component {
    componentDidMount(){

    }

    registerSystem=()=>{
      console.log('registered');
      axios({method:'',url:''})
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    removeSystem=()=>{
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
               <h3 className='subheading' style={{paddingTop:'30px'}}>System Registration</h3>

               <div style={{width:'87px',height:'5px',background:'#FE5B1B',marginTop:'-15px',borderRadius:'3px'}}>
      </div>


      <form id="sensorreg" style={{marginTop:'-20px',marginTop:'20px',marginBottom:'50px'}}>
            
            
        
            <div className="inputdiv">
              <span className="label">System Name :</span>
              <input
                type="text"
                name="systemname"
                id="systemname"
                required="required"
               
              />
            </div>

            <div className="inputdiv">
              <span className="label">System ID :</span>
              <input
                type="text"
                name="systemmid"
                id="systemmid"
                required="required"
              />
            </div>
            <div className="inputdiv">
              <span className="label">System Image :</span>
              <input
                type="file"
                name="systemimg"
                id="systemimg"
                required="required"
                accept='image/*'
              />
            </div>

            < div style={{display:'flex',marginTop:'55px',marginLeft:'50px'}}>

               <div style={{display:'flex',background:'#FE5B1B',width:'172px',height:'35px',borderRadius:'5px'}}>
               <div
                onClick={this.registerSystem}
                style={{marginLeft:'15px',marginTop:'5px',color:'white',cursor:'pointer'}}
              >  Register System
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
              >  Remove System
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
              <span className="label">System ID :</span>
              <input
                type="text"
                name="sysid"
                id="sysid"
                required="required"
              />
            </div>
            <div style={{display:'flex',cursor:'pointer',background:'#FE5B1B',width:'172px',height:'35px',borderRadius:'5px',marginLeft:'262px',marginTop:'22px'}}>
               <div onClick={this.removeSystem}
                style={{marginLeft:'15px',marginTop:'5px',color:'white'}}
              >  Remove System
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
