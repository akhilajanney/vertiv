import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import $ from 'jquery'
import axios from 'axios';
import ApexCharts from 'react-apexcharts'

export default class Realtime extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      success: false,
      error: false,
      series: [],
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
          width: 2,
        },
        dataLabels: {
          enabled: false,
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
            categories:'',
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toFixed(2) + "°C";
            }
          },
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
            opacityTo: 0.9,
          },
        },
        colors: ['#F44336'],
      },
    }
  }
  componentDidMount() {
    sidelinkClicked('option2')
    this.realtimeData();
  }


  realtimeData = () => {
    axios({ method: 'GET', url: '/api/sensor/temperature' })
      .then((response) => {
        // console.log(response);
        let data = response.data;
        for (let i = 0; i < data.length; i++) {
          let sys_div = document.createElement("div");
          $(sys_div).attr('id', 'system_' + i);
          $(sys_div).css("position", "relative");
          let sys_img = document.createElement("img");
          $(sys_img).attr("src", data[i].image);
          $(sys_img).attr("id", "sys_img" + i);
          $(sys_img).attr("alt", data[i].systemname);
          
          let  divp=document.createElement('p')
          $(divp).text(data[i].systemname);
          console.log(data[i].systemname);
          $(divp).css({
            "position":"absolute",
              "top":'15px',
              "left": (120 ) + "px",
              "font-weight":500,
              "font-size":'21px',
              "text-transform":'capitalize',
              "font-family" :'Poppins-Regular'
          })
          $(sys_div).append(sys_img);
          $(sys_div).append(divp);
         


          for (let j = 0; j < data[i].sensors.length; j++) {
            let temp = data[i].sensors[j].temperature;
            let senBGclr = "";
            if (temp <= 20) senBGclr = "rgba(16,255,0,0.6)";
            else if (temp >= 21 && temp < 26) senBGclr = "rgba(128,204,0,0.6)";
            else if (temp >= 26 && temp < 31) senBGclr = "rgba(255,194,0,0.6)";
            else if (temp >= 31 && temp < 36) senBGclr = "rgba(255,125,0,0.6)";
            else if (temp >= 36) senBGclr = "rgba(255,35,0,0.6)";
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
              "background": senBGclr,
            });
            $(sen_div).attr("title",
              "Sensor ID : " + data[i].sensors[j].macid +
              "\nTemperature : " + data[i].sensors[j].temperature);
            $(sen_div).on("click", () => {
              this.sensorGraph(data[i].sensors[j].macid, data[i].systemname)
            })
            $(sys_div).append(sen_div);

          
          }
          $("#img_container").append(sys_div);
         
        }

      })
      .catch((error) => {
        console.log(error);
      })
  }

  sensorGraph = (mac, name) => {
    // console.log('clicked');
    $('#popup').css('display', 'block');
    this.setState({ series: [] });
    axios({ method: 'GET', url: '/api/sensor/dailydata?macaddress=' + mac })
      .then((response) => {
        // console.log(response);
        $("#systemname").css({ "font-weight": "bold", "margin": "20px", "margin-bottom": "0px" });
        $("#systemname").text("System Name: " + name);
        $("#sensorid").css({ "font-weight": "bold", "margin": "20px", "margin-bottom": "0px" });
        $("#sensorid").text("Sensor ID : " + mac);
        let data = response.data;
        let value = []
        for (let i = 0; i < data.length; i++) {
          let tempData = [];
          this.time = data[i].timestamp.substring(0, 19).replace("T", " ");
          var date = new Date(this.time);
          var milliseconds = date.getTime();
          tempData.push(milliseconds);
          tempData.push(data[i].temperature)
          value.push(tempData);
        }
        this.setState({ series: [{ name: 'Temperature ', data: value,categories:this.time }] })

      })
      .catch((error) => {
        // console.log(error);
        if(error.response.status===404){
          this.setState({error:true,message:'No data found'})
        }
      })


  }


  render() {
    const { message, success, error, series } = this.state;
    // console.log("==----====>", series);
    return (

      <div
        style={{
          float: "right",
          width: "80%",
          marginTop: '64px',
          marginBottom: "30px",
        }}
      >
        <h1>Realtime Tracking</h1>
        <div style={{
          width: '130px',
          marginTop: '-21px',
          height: '5px', background: '#fe5b1bb3',
          borderRadius: '3px'
        }}>
        </div>

        <div id="img_container" style={{
          display: 'flex',
          flexWrap: "wrap"
        }}>
        </div>
        <div id='popup'
          style={{
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
          }}
        >
          <i style={{
            float: "right",
            fontSize: "25px",
            cursor: "pointer"
          }}
            onClick={() => {
              $("#popup").css("display", "none")
            }}
            className="far fa-times-circle">
          </i>
          <span id='systemname'>System Name</span>
          <span id='sensorid'>Sensor ID :</span>

          {series.length && (
            <div style={{ marginTop: "30px" }}>
              <div>
                <div id="chart">
                  <div id="chart-timeline">
                    <ApexCharts options={this.state.options} series={series} type="area" height={450} />
                  </div>
                </div>
              </div>
            </div>
          )
          }

        </div>

      </div>
    )
  }
}
