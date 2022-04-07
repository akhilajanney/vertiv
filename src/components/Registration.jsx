import React, { Component } from 'react'
import { sidelinkClicked } from './leftsidebar/Leftsidebar'
import styles from './styles.css'
import Sensorsreg from './Sensorsreg'
import Systemreg from './Systemreg'
import $ from 'jquery'
// const Navbtn = {
//     width:'363px',
//     height:'40px',
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "16px",
//     cursor: "pointer",
//     color: "Black",
//     fontWeight: "bold",
//     boxShadow: "3px 3px 5px 3px rgba(0, 0, 0, 0.25)",
//   };
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
        $("#opt0").css({"background": "#fe5b1bb3", "color": "white" });
      }

      optionChange = (e) => {
        $("#opt0").css({ "background": "none", "color": "#000" });
        $("#opt1").css({"background": "none", "color":"#000"});
        this.setState({ flag: true })
        this.List = [false, false]
        let id = parseInt(e.target.id.substring(3))
        $("#" + e.target.id).css({ "background": "#fe5b1bb3", "color": "white" });
        this.List[id] = true;
      }
      
  render() {
    const{message,success,error}=this.state;
    return (
        <>
      <div  
        className='maindiv'
      >
          <h1>Registration</h1>
      <div style={{width:'110px',height:'5px',background:'#fe5b1bb3',marginTop:'-20px',borderRadius:'3px'}}>
      </div>

      <div className="container fading"
              style={{
                marginTop: "30px",
               
              }}>
              <div className="row"
                onClick={this.optionChange}>
                <button
                  id="opt0"
                  // className="col col-3 heading"
                  className='navbtn'
                  // style={Navbtn}
                >
                  System Registration
                </button>
                <button
                
                  id="opt1"
                  // className="col col-3 heading"
                  className='navbtn'
                  // style={Navbtn}
                >
                  Sensors Registration
                </button>
              </div>
              <div
                className="container"
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
