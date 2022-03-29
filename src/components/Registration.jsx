import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import Sensorsreg from './Sensorsreg'
import Systemreg from './Systemreg'
import $ from 'jquery'
const Navbtn = {
    padding: "10px",
    width:'30%',
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    color: "Black",
    fontWeight: "bold",
    boxShadow: "3px 3px 5px 3px rgba(0, 0, 0, 0.25)",
  };
export default class Registration extends Component {
    List = [false, false];
  constructor(props) {
    super(props);
    this.state = {
      // flag: false,
    }
  }
    componentDidMount(){
        sidelinkClicked('option1')
        this.setState({ flag: true })
        this.List[0] = true;
        $("#opt0").css({"background": "rgb(254, 91, 27)", "color": "white" });
      }

      optionChange = (e) => {
        $("#opt0").css({ "background": "none", "color": "#000" });
        $("#opt1").css({"background": "none", "color":"#000"});
        this.setState({ flag: true })
        this.List = [false, false]
        let id = parseInt(e.target.id.substring(3))
        $("#" + e.target.id).css({ "background": "rgb(254, 91, 27)", "color": "white" });
        this.List[id] = true;
      }
  render() {
    return (
        <>
      <div  
      style={{
        float: "right", width: "90%",
        marginTop: '94px',
        marginBottom: "30px",
        marginRight:'-116px'
      }}
      >
          <h1>Registration</h1>
      <div style={{width:'110px',height:'5px',background:'#FE5B1B',marginTop:'-20px',borderRadius:'3px'}}>
      </div>

      <div className="container fading"
              style={{
                marginTop: "30px",
              }}>
              <div className="row"
                onClick={this.optionChange}>
                <button
                  id="opt0"
                  className="col col-3 heading"
                  style={Navbtn}
                >
                  System Registration
                </button>
                <button
                
                  id="opt1"
                  className="col col-3 heading"
                  style={Navbtn}
                >
                  Sensors Registration
                </button>
              </div>
              <div
                className="container"
                style={{
                  borderRadius: "0px 0px 5px 5px",
                  border: "2px solid #FE5B1B",
                  borderTop: "none",
                  boxShadow: "0px 0px 5px 1px #FE5B1B",
                  width:'726px',
                }}
                id="childComponent"
              >
                {this.List[0] && (< Systemreg/>)}
                {this.List[1] && (<Sensorsreg />)}

              </div>
            </div>
          </div>
      
      
      </>
    )
  }
}
