import React, {Component} from 'react'
import {sidelinkClicked} from './leftsidebar/Leftsidebar'
import $ from 'jquery'
import axios from 'axios'


export default class Health extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            success: false,
            error: false
        }
    }
    componentDidMount() {
        sidelinkClicked('option4')
        this.systemHealth();
        this.interval = setInterval(this.systemHealth, 15 * 1000);

    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidUpdate(){
       setTimeout(() => this.setState({message:''}), 3000);
      }

    systemHealth = () => {
        axios({method: 'GET', url: '/api/sensor/temperature'}).then((response) => {
            console.log(response);
            let data = response.data;
            // let incrementslno=0;
            let sno = 1;
            $('#systemHealth').empty();
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].sensors.length; j++) {
                    let datas = data[i].sensors[j];
                    // console.log(datas);

                    let timestamp = datas.lastseen.substr(0, 10) + " " + datas.lastseen.substr(11, 8),
                        status = 'red';
                    if (new Date() - new Date(datas.lastseen) <= 2 * 60 * 1000) {
                        status = "green";
                    }
                    $('#systemHealth').append("<tr><td>" + (
                      sno
                    ) + "</td><td>" + datas.macid + "</td><td>" + data[i].systemname + "</td><td>" + datas.battery + "</td><td>" + timestamp + "</td><td>" + "<div class='circle' style='margin:auto;background-color:" + status + ";'></div></td></tr>");
                    sno+=1;

                  }
            }


        }).catch((error) => {
          if(error.response.status===403){
            this.setState({error:true,message:'Please Login Again'})
          }else if(error.response.status===400){
            this.setState({error:true,message:'Bad Request!'})
          }
        })
    }


    render() {
        console.log(this.state,'=======');
        const {message, success, error} = this.state;
        return (
            <div 
                className='maindiv'
            >
                <h1>system Health</h1>
                <div style={
                    {
                        width: '95px',
                        height: '5px',
                        background: '#fe5b1bb3',
                        marginTop: '-20px',
                        borderRadius: '3px'
                    }
                }></div>

                <p>{message}</p>


                <table style={
                    {marginTop: "30px"}
                }>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>SENSOR ID</th>
                            <th>SYSTEM NAME</th>
                            <th>
                                Battery</th>
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
