import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

//Component
import Navbar from "./Component/Navbar";
import Nav_Admin from "./Component/Nav-Admin";
import Nav_Masyarakat from "./Component/Nav-Masyarakat";
import Nav_Petugas from "./Component/Nav-Petugas";

//Home
import Home from "./All/Home";

//Auth
import Login from "./Auth/Login";
import Register from "./Auth/Register";

//Admin
import Admin from "./Admin/Admin";
import Admin_Pengaduan from "./Admin/Admin-Pengaduan";
import Admin_Masyarakat from "./Admin/Admin-Masyarakat";
import Admin_Tanggapan from "./Admin/Admin-Tanggapan";
import Admin_Petugas from "./Admin/Admin_Petugas";

//Petugas
import Laporan from "./Petugas/Laporan";


//Masyarakat
import Pangaduan from "./Member/Pengaduan";





class App extends Component{
  render = ()=>{
    return(
      <switch>
        {/* HOME - LOGIN REGISTER */}
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/Login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/Register">
          <Navbar />
          <Register />
        </Route>

       {/* ADMIN  */}
        <Route path="/Admin/Pengaduan">
          <Nav_Admin />
          <Admin_Pengaduan />
        </Route>
        <Route path="/Admin/Masyarakat">
          <Nav_Admin />
          <Admin_Masyarakat />
        </Route>
        <Route path="/Admin/Tanggapan">
          <Nav_Admin />
          <Admin_Tanggapan />
        </Route>
        <Route path="/Admin/Petugas">
          <Nav_Admin />
          <Admin_Petugas />
        </Route>
        <Route path="/Admin">
          <Nav_Admin />
          <Admin />
        </Route>

        {/* PETUGAS  */}
        <Route path="/Laporan">
          <Nav_Petugas />
          <Laporan />
        </Route>

        {/* MASYARAKAT  */}
        <Route path="/Pengaduan">
          <Nav_Masyarakat />
          <Pangaduan />
        </Route>
      </switch>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
