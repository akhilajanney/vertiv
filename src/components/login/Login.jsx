import React, { Component } from 'react';
import login from './login.css'
// import '../commonstyle.css'
// import axios from 'axios'
// axios.defaults.xsrfHeaderName = "x-csrftoken";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            message:"",
            error: false, 
        }
    }
    componentDidMount(){
        // this.submit
    }

    // submit=(e)=>{
    //     e.preventDefault();
    //       console.log('loggedin');
    //       const {  username, password } = this.state;
    //      let data = { username: username, password: password }
    //     axios({method:'POST',url:'/api/login',data:data})
    //     .then((res)=>{
    //         console.log(res);
    //         if (res.status === 200 ) {
    //             console.log('Response===>');
    //             // localStorage.setItem("loggedin", "success");
    //             // this.props.parentCallback("success");

    //             sessionStorage.setItem("login", "success");
    //             this.props.parentCallback("success");
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         // localStorage.setItem("loggedin", "failed");
    //         // this.props.parentCallback("failed");
    //         sessionStorage.setItem("login", "failed");
    //         this.props.parentCallback("failed");
    //             this.setState({error:true,message:'incorrect username/password'})
    //     })
    // }
    // handleChange=(e)=>{
    //     this.setState({[e.target.name]:e.target.value})
      

    // }

  render() {
      const{username,password,message}=this.state;
    return (
        <>
       <div style={{position:'relative',background:'red'}}>
            <div className='main_body' style={{position:'absolute'}}>
                <img
                 src="/images/logo.png" alt="logo" 
                 style={{
                     width:'53%',
                     marginTop:'30px',
                     marginLeft:'77px'
                    }}
                 /><br/>
                <span
                 style={{marginLeft:'94px',
                 fontSize:'19px',
                    color:'white',
                    fontWeight:500,
                    
                 }}>
                    Login to Dashboard</span><br />

                    <p 
                         style={{marginLeft:'71px',
                         fontSize:'14px',
                            color:'white',
                            // margin:'0px'
                         }}
                    >
                        Enter Username and Password Below
                    </p>
                    {/* <p 
                    style={{color:'white',marginTop:'20px'}}
                    >hi</p> */}

                 {/* <p
                 style={{textAlign:'center',color:'red'}}
                 
                 >{message}</p> */}
                 <form 
                //  onSubmit={this.submit}
                 >
                     <label htmlFor=""
                     style={{
                        marginLeft: '35px',
                        color: '#FE5B1B',
                        marginBottom: '10px'
                     }}
                        
                     >Username</label><br />
                    <input 
                     type="text" 
                    name='username'
                    className='type_text'
                    placeholder='Username'
                    // value={username}
                    // onChange={this.handleChange}
                    style={{padding:'0px',marginTop:'10px',marginBottom: '10px',width:'285px',height:'35px'}}
                        /> <br />

                    <label htmlFor=""
                     style={{
                        marginLeft: '35px',
                        color: '#FE5B1B',
                        marginBottom: '10px'
                     }}
                        
                     >Password</label><br />

                    <input 
                    type='password' 
                    name='password'
                    className='type_password'
                    placeholder='Password' 
                    // onChange={this.handleChange}
                    style={{padding:'0px',marginTop:'10px',width:'285px',height:'35px'}}
                    // value={password} 
                    /><br />

                 {/* <input 
                 style={{marginLeft:'35px',marginTop:'15px'}}
                 type="checkbox" /> Show Password */}

                 <button
                 style={{
                     width:'285px',
                     background:'#FE5B1B',
                     height: '35px',
                     marginLeft:'35px',
                     marginTop:'18px',
                     borderRadius:'6px',
                     color:'white',
                     cursor:'pointer'
                }}
                 >LOGIN</button>
                 </form>
            </div>
            </div>
        </>
    );
  }
}
