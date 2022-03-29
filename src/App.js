import {React,Component} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Leftsidebar from "./components/leftsidebar/Leftsidebar";
import Alerts from "./components/Alerts";
import Registration from "./components/Registration";
import Health from "./components/Health";
import Home from './components/Home';
import Realtime from './components/Realtime';
import Sensorsreg from './components/Sensorsreg';
import Systemreg from './components/Systemreg';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      loggedin :false,
      status:'failed'
    }

  }
  login=()=>{
    let data=sessionStorage.getItem('login')
    this.setState({status:data});
  }
  componentDidMount(){
    let data=sessionStorage.getItem('login')
    this.setState({status:data});
  }
  render(){
//     const { status } = this.state;
//     if (status === "failed" || status===null){
//       return (
//         <Router>
//           <Routes>
//             <Route path="/" element={<Navigate to="/login" />} />
//             <Route exact path="/login" element={<Login parentCallback = {this.login} />}  />
//           </Routes>
//         </Router>
//       )
// }
// else{
  return (
    <div >
        <Router>  
        <Navbar/>
          <Leftsidebar/>   
          {/* <Login/> */}
         
        {/* <Home/> */}
        {/* <Configuration/> */}
          <Routes>
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home/>}  />
            <Route exact path="/register" element={<Registration/>}  />
            <Route exact path="/health" element={<Health/>}  />
            <Route exact path="/alerts" element={<Alerts/>}  />
            <Route exact path="/realtime" element={<Realtime/>}  />
            
          </Routes>
        </Router>
    </div>
  );
   }
  // }
}
