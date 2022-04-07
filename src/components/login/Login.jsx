import React, { Component } from 'react';
import login from './login.css'
import '../styles.css'
import axios from 'axios'
axios.defaults.xsrfHeaderName = "x-csrftoken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            message:"",
            error: false, 
            success:false,
        }
    }

    submit=(e)=>{
        e.preventDefault();
          const {username, password } = this.state;
         let data = { username: username, password: password }
        axios({method:'POST',url:'/api/login',data:data})
        .then((res)=>{
            // console.log(res);
            if (res.status === 200 ) {
                // console.log('Response===>');

                sessionStorage.setItem("login", "success");
                this.props.parentCallback("success");
            }
        })
        .catch((err)=>{
            // console.log(err);
            sessionStorage.setItem("login", "failed");
            this.props.parentCallback("failed");
                this.setState({error:true,message:'incorrect username/password'})
                if(err.response.status===401){
                    this.setState({err:true,message:'Incorrect Credentials'})
                }
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      

    }
    componentDidUpdate(){
        setTimeout(() => this.setState({message:''}), 3000);
      }

  render() {
      const{username,password,message,error,success}=this.state;
    return (
        <>
       <div style={{margin:'0px',background:'linear-gradient(to right, #ffc3b3, #999999)',position:'absolute',width:'100%',height:'100%'}} >
            <div className='main_body' >
            
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
                    fontWeight:500, fontFamily: 'Poppins-Regular'
                    
                 }}>
                    Login to Dashboard</span><br />

                    <p 
                         style={{marginLeft:'50px',
                         fontSize:'14px',
                            color:'white',
                            fontFamily: 'Poppins-Regular'
                         }}
                    >
                        Enter Username and Password Below
                    </p>
                            {error && (
                    <div style={{ color: 'red', marginLeft:'85px'}}>
                    <strong>{message}</strong>
                    </div>
                )}
                    
                 <form 
                 onSubmit={this.submit}
                 >
                     <label htmlFor=""
                     style={{
                        marginLeft: '35px',
                        color: '#FE5B1B',
                        marginBottom: '10px',

                     }}
                        
                     >Username</label><br />
                    <input 
                     type="text" 
                    name='username'
                    className='type_text'
                    placeholder='Username'
                    value={username}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    style={{padding:'0px',marginTop:'10px',width:'285px',height:'35px'}}
                    value={password} 
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
