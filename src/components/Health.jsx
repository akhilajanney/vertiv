import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import $ from 'jquery'
import axios from 'axios'


export default class Health extends Component {
    componentDidMount(){
        sidelinkClicked('option4')
    //     axios({method:'GET',url:"/api/"})
    // .then((response)=>{
    //   if(response.status===200|| response.status===201 && response.length!=0){
    //     let data=response.data;
    //     console.log('assethealth',data);
    //     $('#systemhealth').empty();
    //     for(let i=0;i<data.length;i++){

    //       let lastseen=data[i].lastseen .substr(0, 10) +
    //     " " +
    //     data[i].lastseen.substr(11, 8),

    //     status='red';
    //     if (new Date() - new Date(data[i].lastseen) <= 2 * 60 * 1000) {
    //       status = "green";
    //     }
    //     $('#systemHealth').append(
    //       "<tr><td>" +
    //             (i + 1) +
    //             "</td><td>" +
    //              +
    //             "</td><td>" +
    //              +
    //             "</td><td>" +
    //             lastseen +
    //             "</td><td>" +
    //             "<div class='circle' style='margin:auto;background-color:" +
    //             status +
    //             ";'></div></td></tr>"

    //     );
    //   }
    //   }
    // })
    // .catch((error)=>{
    //   console.log(error)
    //   if(error.status===404){
    //     this.setState({error:true,message:'not found'})
    //   }else if(error.status===400){
    //     this.setState({error:true,message:'Bad request'})}
    //  })
      }
      
      
  

     
  render() {
    return (
      <div
      style={{
        float: "right", width: "90%",
        marginTop: '94px',
        marginBottom: "30px",
        marginRight:'-116px'
      }}
      >
          <h1>system Health</h1>
          <div style={{width:'95px',height:'5px',background:'#FE5B1B',marginTop:'-20px',borderRadius:'3px'}}>
              </div>

        
              <table style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>SENSOR ID</th>
                    <th>SYSTEM NAME</th>
                    <th> Battery</th>
                    <th>LAST SEEN</th>
                    <th>status</th>
                    
                  </tr>
                </thead>
                <tbody id="systemHealth"></tbody>
              </table>

      </div>
    )
  }
}
