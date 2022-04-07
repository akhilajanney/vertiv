import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios';

export default class Systemreg extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
      image: null,
      message1:''
    }
  }
  
    handleImage = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
         this.setState({
            image: file,
         });
      };
      reader.readAsDataURL(file);
   }
    registerSystem=()=>{
      if($('#systemname').val()!=='' && $('#systemid').val()!=='' &&$('#systemimg').val()!=='' ){
      let form_data = new FormData();  
      form_data.append("name", $('#systemname').val());
      form_data.append("image", this.state.image);
      form_data.append("sysid", $('#systemid').val());
      axios({method:'POST',url:'/api/sysregistration',data: form_data,
      headers:{'contnet-type':'multipart/formdata'}
    })
      .then((response)=>{
        // console.log(response);
        if(response.status===200|| response.status===201){
          this.setState({success: true, message: 'System registered successfullyy'})
          this.setState({ systemname: "", systemid: "", systemimg: ""})
          $('#systemname').val('');
          $('#systemid').val('');
          $('#systemimg').val('');
        }

      })
      .catch((error)=>{
        console.log(error);
      })
    }
    else{
      this.setState({error:true,message:'Required All Fields'})
    }
    }
    removeSystem=()=>{
      let data={
       sysid: $('#sysid').val()}
      // console.log('removed');
      axios({method:'DELETE',url:'/api/sysregistration',data:data})
      .then((response)=>{
        // console.log(response);
        if(response.status===200 || response.status===201){
          this.setState({success: true, message1: 'System Removed Successfullyy'})
          $('#sysid').val('');
          $('#deletetag').hide();
        }
      })
      .catch((error)=>{
        console.log(error);
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
               <h3 className='subheading' style={{paddingTop:'30px'}}>System Registration</h3>

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
            </div>
          )}
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
                type="number"
                name="systemid"
                id="systemid"
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
                onChange={this.handleImage}
              />
            </div>

            < div className='submit_div'>
            <div className='remove'>
               <div
                style={{marginLeft:'15px',marginTop:'5px',color:'#fe5b1b',cursor:'pointer',fontFamily:'Poppins-Regular'}}
                    onClick={this.hide}
              >  Remove System
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'#fe5b1b'}}
                     className="fas fa-file-times"></i>    
             </div>
               </div>

               <div className='register'>
               <div
                onClick={this.registerSystem}
                style={{marginLeft:'15px',marginTop:'5px',color:'white',cursor:'pointer',fontFamily:'Poppins-Regular'}}
              >  Register System
                </div>
                <div>
                     <i  style={{fontSize:'20px',marginLeft:'10px',marginTop:'5px',color:'white'}}
                     className="fas fa-file-plus"></i>
                  
             </div>
               </div>

             
               </div>
          </form>

          <form id="deletetag"
            style={{paddingBottom:'30px',display:'none'}}
          >
          <div className="inputdiv">
              <span className="label">System ID :</span>
              <input
                type="number"
                name="sysid"
                id="sysid"
                required="required"
              />
            </div>
            <div className='delete'>
               <div onClick={this.removeSystem}
                style={{marginLeft:'15px',marginTop:'5px',color:'#fe5b1b',fontFamily:'Poppins-Regular'}}
              >  Remove System
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
