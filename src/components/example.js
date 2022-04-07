import React, {Component} from 'react'
import {sidelinkClicked} from './leftsidebar/Leftsidebar'
import $ from 'jquery'
import axios from 'axios';
import ApexCharts from 'react-apexcharts'

export default class Realtime extends Component {
    List = [false, false, false];
    constructor() {
        super();
        this.state = {
            message: '',
            success: false,
            error: false,
            pop_err_msg: false,
            series: [],
            flag: false,
            options: {
                chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 450,
                    foreColor: "#004d99", // labels colors
                    curve: 'smooth',
                    zoom: {
                        autoScaleYaxis: true
                    },
                    animations: {
                        enabled: true,
                        easing: 'easeinout',
                        speed: 1500,
                        animateGradually: {
                            enabled: true,
                            delay: 1500
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 1500
                        }
                    }
                },
                stroke: {
                    width: 2
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    colors: ['#008FFB']
                },
                xaxis: {
                    type: 'datetime',
                    tickAmount: 1,
                    labels: {
                        datetimeUTC: false,
                        categories: ''
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(2) + "°C";
                        }
                    }
                },
                tooltip: {
                    x: {
                        format: 'yyyy-MM-dd HH:mm:ss'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.2,
                        opacityTo: 0.9
                    }
                },
                colors: ['#F44336']
            }
        }
    }
    componentDidMount() {
        sidelinkClicked('option2')
        this.realtimeData();
        this.setState({flag: true})
        this.List[0] = true;
        $("#opt0").css({"background": "#fe5b1bb3", "color": "white"});

    }
    optionChange = (e) => {
        $("#opt0").css({"background": "none", "color": "#000"});
        $("#opt1").css({"background": "none", "color": "#000"});
        $("#opt2").css({"background": "none", "color": "#000"});
        this.setState({flag: true})
        this.List = [false, false, false]
        let id = parseInt(e.target.id.substring(3))
        $("#" + e.target.id).css({"background": "#fe5b1bb3", "color": "white"});
        this.List[id] = true;
    }


    realtimeData = () => {
        axios({method: 'GET', url: '/api/sensor/temperature'}).then((response) => {
            console.log(response);
            let data = response.data;
            for (let i = 0; i < data.length; i++) {
                let sys_div = document.createElement("div");
                $(sys_div).attr('id', 'system_' + i);
                $(sys_div).css("position", "relative");
                let sys_img = document.createElement("img");
                $(sys_img).attr("src", data[i].image);
                $(sys_img).attr("id", "sys_img" + i);
                $(sys_img).attr("alt", data[i].systemname);
                let divp = document.createElement('p')
                $(divp).text(data[i].systemname);
                // console.log(data[i].systemname);
                $(divp).css({
                    "position": "absolute",
                    "top": '15px',
                    "left": (120) + "px",
                    "font-weight": 500,
                    "font-size": '21px',
                    "text-transform": 'capitalize',
                    "font-family": 'Poppins-Regular'
                })
                $(sys_div).append(sys_img);
                $(sys_div).append(divp);

                let title = ''
                let att = ''
                for (let j = 0; j < data[i].sensors.length; j++) {

                    let temp = data[i].sensors[j].temperature;
                    // console.log(temp);
                    let senBGclr = "";
                    if (temp <= 20) 
                        senBGclr = "rgba(16,255,0,0.6)";
                     else if (temp >= 21 && temp < 26) 
                        senBGclr = "rgba(128,204,0,0.6)";
                     else if (temp >= 26 && temp < 31) 
                        senBGclr = "rgba(255,194,0,0.6)";
                     else if (temp >= 31 && temp < 36) 
                        senBGclr = "rgba(255,125,0,0.6)";
                     else if (temp >= 36) 
                        senBGclr = "rgba(255,35,0,0.6)";
                    

                    let sen_div = document.createElement('div');
                    $(sen_div).attr("id", data[i].sensors[j].id);
                    $(sen_div).css({
                        "position": "absolute",
                        "width": '44px',
                        "height": "27px",
                        "top": '122px',
                        "left": (66.5 + (76 * j)) + "px",
                        "cursor": "pointer",
                        "border-radius": "4px",
                        "background": senBGclr
                    });
                    $(sen_div).attr("title", "Sensor ID : " + data[i].sensors[j].macid + "\nTemperature : " + data[i].sensors[j].temperature);

                    $(sys_div).on("click", () => {
                        this.sensorGraph(data[i].sysid, data[i].systemname)
                    })
                    $(sys_div).append(sen_div);

                    // att+=  $(sen_div).attr("title",
                    // "\nTemperature : " + data[i].sensors[j].temperature);
                    // title += 'Sensor ID  :'+data[i].sensors[j].macid  +
                    // "\nTemperature : " + data[i].sensors[j].temperature  +"\n"

                }
                // $(sys_div).attr("title", att);


                $("#img_container").append(sys_div);

            }

        }).catch((error) => {
            if (error.response.status === 403) {
                this.setState({error: true, message: 'Please Login Again'})
            } else if (error.response.status === 400) {
                this.setState({error: true, message: 'Bad request!'})
            } else if (error.response.status === 404) {
                this.setState({error: true, message: 'No Temperature found for System.'})
            }
        })
    }

    sensorGraph = (mac, name) => {
        this.setState({message: "", error: false, success: false, pop_err_msg: false});
        this.setState({series: []});
        $('#popup').css('display', 'block');
        $("#systemname").css({"font-weight": "bold", "margin": "20px", "margin-bottom": "0px"});
        $("#systemname").text("System Name: " + name);
        $("#sensorid").css({"font-weight": "bold", "margin": "20px", "margin-bottom": "0px"});
        $("#sensorid").text("Sensor ID : " + mac);
        $('#chart').remove();
        console.log('===================================');
        // axios({
        //     method: 'GET',
        //     url: '/api/system/daily?sysid=' + mac
        // }).then((response) => {
        //     console.log("response====>", response);
        //     let data = response.data;
        //     if (data.length !== 0) {
        //         let value = []
        //         for (let i = 0; i < data.length; i++) {
        //             for (let j = 0; j < data[i].sensors.length; j++) {
        //                 let tempData = [];
        //                 this.time = data[i].sensors[j].timestamp.substring(0, 19).replace("T", " ");
        //                 var date = new Date(this.time);
        //                 var milliseconds = date.getTime();
        //                 tempData.push(milliseconds);
        //                 tempData.push(data[i].sensors[j].temperature)
        //                 value.push(tempData);
        //                 // console.log(tempData)
        //             }
        //         }
        //         this.setState({
        //             series: [
        //                 {
        //                     name: 'Temperature ',
        //                     data: value,
        //                     categories: this.time
        //                 }
        //             ]
        //         })

        //     } else {
        //         this.setState({message: 'No daily data found for System.', pop_err_msg: true})
        //     }
        // }).catch((error) => {
        //     if (error.status === 403) {
        //         this.setState({error: true, message: 'Please Login Again'})
        //     } else if (error.response.status === 400) {
        //         this.setState({error: true, message: 'Bad request!'})
        //     } else {
        //         this.setState({message: 'No daily data found for System.', pop_err_msg: true})
        //     }
        // })
    }


    render() {
        const {
            message,
            success,
            error,
            series,
            pop_err_msg
        } = this.state;
        return (

            <div className='maindiv'>
                <h1>Realtime Tracking</h1>
                <div style={
                    {
                        width: '130px',
                        marginTop: '-21px',
                        height: '5px',
                        background: '#fe5b1bb3',
                        borderRadius: '3px'
                    }
                }></div>
                {
                message.length !== 0 ? (setTimeout(() => {
                    this.setState({message: "", error: false, success: false})
                }, 3000), <p/>) : (
                    <p/>)
            }
                {
                error && (
                    <div style={
                        {
                            color: 'red',
                            marginLeft: '50px',
                            paddingTop: "17px"
                        }
                    }>
                        <strong>{message}</strong>
                    </div>
                )
            }
                {
                success && (
                    <div style={
                        {
                            color: 'green',
                            marginLeft: '50px',
                            paddingTop: "17px"
                        }
                    }>
                        <strong>{message}</strong>
                    </div>
                )
            }

                <div id="img_container"
                    style={
                        {
                            display: 'flex',
                            flexWrap: "wrap"
                        }
                }></div>
                <div id='popup'
                    style={
                        {
                            display: "none",
                            width: '985px',
                            height: '490px',
                            overflow: "hidden",
                            top: "144px",
                            left: "278px",
                            position: "absolute",
                            borderRadius: "10px",
                            background: '#FFF',
                            boxShadow: "8px 4px 20px 0px rgb(128 128 128 / 20%)",
                            border: '1px solid #00000024',
                            padding: '20px'
                        }
                }>
                    <i style={
                            {
                                float: "right",
                                fontSize: "25px",
                                cursor: "pointer"
                            }
                        }
                        onClick={
                            () => {
                                $("#popup").css("display", "none")
                            }
                        }
                        className="far fa-times-circle"></i>
                <span id='systemname'>System Name:</span>
                <span id='sensorid'>System ID:</span><br/>

                <div style={
                        {marginTop: '35px'}
                    }
                    id='btnchange'
                    onClick={
                        this.optionChange
                }>
                    {/* <button id='opt0' value='daily' className='graph_btn'
                        onClick={this.sensorGraph}>DAILY</button>

                    <button id='opt1' value='weekly' className='graph_btn'>WEEKLY</button>
                    <button id='opt2' value='monthly' className='graph_btn'>MONTHLY</button> */} 
                    </div>
                {
                pop_err_msg && (
                    <div style={
                        {
                            color: 'red',
                            marginLeft: '50px',
                            paddingTop: "17px"
                        }
                    }>
                        <strong>{message}</strong>
                    </div>
                )
            }

                {
                series.length > 0 ? (
                    <div style={
                        {marginTop: "30px"}
                    }>
                        <div>
                            <div id="chart">
                                <div id="chart-timeline">
                                    <ApexCharts options={
                                            this.state.options
                                        }
                                        series={series}
                                        type="area"
                                        height={450}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p/>)
            } </div>

        </div>
        )
    }
}
