import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

export default class Sensorsreg extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
      message1:''
    }
  }
  componentDidMount(){
    axios({method: 'GET', url: '/api/sysregistration'}).then((response) => {
      if (response.status === 201 || response.status === 200) {
          let data = response.data;
          // console.log('------>', data);
          if (data.length !== 0) {
              for (let i = 0; i < data.length; i++) {
                  $("#systemname").append("<option value=" + data[i].sysid + ">" + data[i].name + "</option>");
              }
          }
      }
  }).catch((error) => {
      // console.log(error);
      if(error.response.status===400){
        this.setState({error:true,message:'Bad Request!'})
      }
  })
}
  
  register=()=>{
    let data={
      macid:$('#sensorid').val(),
      systemid:$('#systemname').val()
    }
    axios({method:'POST',url:'/api/sensor/temperature',data:data})
    .then((response)=>{
      // console.log(response);
      if(response.status===200|| response.status===201){
        this.setState({success: true, message: 'Sensor registered successfullyy'})
        $('#sensorid').val('');
      }else if(response.status === 406){
        this.setState({success: true, message1: response.data.message})
      }
    })
    .catch((error)=>{
      // console.log(error);
      if(error.response.status===403){
        this.setState({error:true,message:'Please Login Again'})
      }else if(error.response.status===400){
        this.setState({error:true,message:'Bad Request!'})
      }

    })
  }

  remove=()=>{
    let data={
      macid:$('#id').val()
    }
    axios({method:'DELETE',url:'/api/sensor/temperature',data:data})
    .then((response)=>{
      // console.log(response);
      if(response.status===200|| response.status===201){
        this.setState({success: true, message: 'Sensor Removed Successfullyy'})
        $('#id').val('');
        $('#deletetag').hide();
      }
    })
    .catch((error)=>{
      // console.log(error);
      if(error.response.status===406){
        this.setState({error:true,message:'Capacity Exceeded!'})
      }

    })
  }

    hide=()=>{
        document.getElementById("deletetag").style.display=$("#deletetag").css("display") ==='block'?'none':'block'
    }
    componentDidUpdate(){
      setTimeout(() => this.setState({message:'',message1:''}), 3000);
    }
  render() {
    const{message,success,error,message1}=this.state;
    return (
      <> 
      <div
              style={{marginTop:'-17px',
              marginLeft:'60px'}} >
             <h3 className='subheading' style={{paddingTop:'30px'}}>Sensors Registration</h3>

             <div style={{width:'87px',height:'5px',background:'#fe5b1bb3',marginTop:'-15px',borderRadius:'3px'}}>
      </div>

      {error && (
            <div style={{ color: 'red', }}>
              <strong>{message}</strong>
            </div>
          )}

          {success && (
            <div style={{ color: 'green', }}>
              <strong>{message}</strong>
            </div>
          )}
           {success && (
            <div style={{ color: 'green', }}>
              <strong>{message1}</strong>
            </div>)}

      <form id="sensorreg" style={{marginTop:'-20px',marginTop:'20px',marginBottom:'50px'}}>
            
            
      <div className="inputdiv">
              <span className="label">System Name:</span>
              <select
                style={{width:'265px'}}
                name="systemname"
                id="systemname"
                required="required"
              >
               </select>
            </div>
        
            {/* <div className="inputdiv">
              <span className="label">Sensor Name :</span>
              <input
                type="text"
                name="sensorname"
                id="sensorname"
                required="required"
               
              />
            </div> */}

            <div className="inputdiv">
              <span className="label">Sensor ID :</span>
              <input
                type="text"
                name="sensorid"
                id="sensorid"
                required="required"
              />
            </div>

            < div style={{display:'flex',marginTop:'55px',marginLeft:'12px'}}>

              

               <div style={{display:'flex',background:'white',border:'1px solid #00000024',
               boxShadow:'8px 4px 20px 0px rgb(128 128 128 / 20%)',
               width:'172px',height:'35px',borderRadius:'10px',marginLeft:'70px'}}>
               <div
                style={{marginLeft:'15px',marginTop:'5px',color:'#fe5b1b',cursor:'pointer',fontFamily:'Poppins-Regular'}}
                    onClick={this.hide}
              >  Remove Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'#fe5b1b'}}
                     className="fas fa-file-times"></i>    
             </div>
               </div>
               <div style={{display:'flex',background:'#fe5b1bb3',width:'172px',height:'35px',
               borderRadius:'10px',border:'1px solid #00000024',fontFamily:'Poppins-Regular',marginLeft:'70px'}}>
               <div onClick={this.register}
                style={{marginLeft:'15px',marginTop:'5px',color:'white',cursor:'pointer'}}
              >  Register Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'white'}}
                     className="fas fa-file-plus"></i>
                  
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
                name="id"
                id="id"
                required="required"
              />
            </div>
            <div style={{display:'flex',cursor:'pointer',background:'white',width:'172px',height:'35px',
            border:'1px solid #00000024',
            boxShadow:'8px 4px 20px 0px rgb(128 128 128 / 20%)',
            borderRadius:'10px',marginLeft:'262px',marginTop:'22px'}}>
               <div  onClick={this.remove}
                style={{marginLeft:'15px',marginTop:'5px',color:'#fe5b1b',fontFamily:'Poppins-Regular'}}
              >  Remove Sensor
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'#fe5b1b'}}
                     className="fas fa-file-times"></i>    
             </div>
               </div>
          </form>  
          
    </div>
    
      </>
    )
  }
}
