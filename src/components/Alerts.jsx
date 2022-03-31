import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import styles from './styles.css'
import $ from 'jquery'
import axios from 'axios'

export default class Alerts extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      success:false,
      error:false,
    }
  }
    componentDidMount(){
        sidelinkClicked('option3')
        this.alerts();
        this.interval = setInterval(this.alerts, 15 * 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidUpdate(){
      setTimeout(() => this.setState({message:''}), 3000);
    }

      alerts=()=>{
        axios({method:'GET',url:'/api/alert'})
        .then((response)=>{
          // console.log(response);
          let data=response.data;
          // console.log(data);
          $('#alert').empty();
        for(let i=0;i<data.length;i++){
          let lastseen=data[i].lastseen .substr(0, 10) +
        " " +
        data[i].lastseen.substr(11, 8);
        
        $('#alert').append(
          "<tr><td>" +
                (i + 1) +
                "</td><td>" +
                 data[i].macid.macid+
                "</td><td>" +
                data[i].macid.systemid.name+
                "</td><td>" +
                  data[i].value+
                "</td><td>" +
                lastseen+
                "</td></tr>"
        );
        }
        })
        .catch((error)=>{
          if(error.response.status===403){
            this.setState({error:true,message:'Please Login Again'})
          }else if(error.response.status===400){
            this.setState({error:true,message:'Bad Request!'})  
          } else if(error.response.status===404){
            this.setState({error:true,message:'No Alert Data Found For Sensors'})
          }
        })
      }
  render() {
    const{message,error,success}=this.state;
    return (
      <div
      style={{
        float: "right", width: "80%",
        marginTop: '94px',
        marginBottom: "30px",
        // marginRight:'-116px'
      }}
      >
          <h1>alerts</h1>
          <div style={{width:'60px',height:'5px',background:'#fe5b1bb3',marginTop:'-20px',borderRadius:'3px',marginBottom:'30px'}}>
              </div>
             
      {error && (
            <div style={{ color: 'red' }}>
              <strong>{message}</strong>
            </div>
          )}

          {success && (
            <div style={{ color: 'green', }}>
              <strong>{message}</strong>
            </div>
          )}

              <table style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>SENSOR ID</th>
                    <th>SYSTEM NAME</th>
                    <th>TEMPERATURE</th>
                    <th>LAST SEEN</th>
                    
                  </tr>
                </thead>
                <tbody id="alert"></tbody>
              </table>
      </div>
    )
  }
}
